// app/api/fetchArticles/route.ts

import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET() {
  const API_KEY = '559dcd7e75ae4ac8b608c46fbc3fed0e'

  try {
    const response = await axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        q: 'cryptocurrency',
        apiKey: API_KEY,
      },
    })
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json(
      { error: 'Error fetching articles' },
      { status: 500 }
    )
  }
}
