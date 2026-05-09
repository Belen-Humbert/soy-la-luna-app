import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { getCardOfTheDay, TAROT_CARDS } from '../lib/tarotCards'

export function useTarotDaily(user) {
  const [card, setCard] = useState(null)
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [revealed, setRevealed] = useState(false)

  const today = new Date()
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

  useEffect(() => {
    if (!user) return
    loadTodayCard()
    loadHistory()
  }, [user])

  const loadTodayCard = async () => {
    setLoading(true)
    try {
      // Buscar si ya tiene carta hoy
      const { data, error } = await supabase
        .from('tarot_history')
        .select('*')
        .eq('user_id', user.id)
        .eq('drawn_date', todayStr)
        .single()

      if (data && !error) {
        // Ya tiene carta de hoy
        const cardData = TAROT_CARDS[data.card_index]
        setCard(cardData)
        setRevealed(true)
      } else {
        // Calcular carta del día (sin guardarla todavía)
        const todayCard = getCardOfTheDay(user.id, today)
        setCard(todayCard)
        setRevealed(false)
      }
    } catch (e) {
      const todayCard = getCardOfTheDay(user.id, today)
      setCard(todayCard)
      setRevealed(false)
    }
    setLoading(false)
  }

  const revealCard = async () => {
    if (!card || revealed || saving) return
    setSaving(true)
    try {
      await supabase.from('tarot_history').upsert({
        user_id: user.id,
        card_index: card.index,
        card_name: card.nombre,
        drawn_date: todayStr,
      })
      setRevealed(true)
      // Recargar historial
      loadHistory()
    } catch (e) {
      setRevealed(true)
    }
    setSaving(false)
  }

  const loadHistory = async () => {
    try {
      const { data } = await supabase
        .from('tarot_history')
        .select('*')
        .eq('user_id', user.id)
        .order('drawn_date', { ascending: false })
        .limit(30)

      if (data) {
        const enriched = data.map(row => ({
          ...row,
          card: TAROT_CARDS[row.card_index],
        }))
        setHistory(enriched)
      }
    } catch (e) {
      console.error('Error cargando historial:', e)
    }
  }

  return { card, history, loading, saving, revealed, revealCard }
}
