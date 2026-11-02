import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    project: "ApexStudio Digital Agency",
    archetype: "agency",
    features: ["Swiss editorial bento layout showcasing venture case studies","Awwwards SOTD honors and $84M+ venture capital impact badges","Interactive project inquiry modal with budget selector and scope definition","Client delivery portal with sprint milestone roadmap"],
    generatedAt: new Date().toISOString()
  });
}
