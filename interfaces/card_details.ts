interface CardDetails {
  id: number
  created_at: string // You may use Date if you handle date parsing
  title: string
  pictures: [string]
  card_id: number
  text: string
}

interface Card {
  id: number
  title: string
  image_logo: string
  card_detail_id: number
  card_detail_text: string
  card_detail_pictures: string
}
