import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.HF_TOKEN) {
      return NextResponse.json(
        { error: "HF_TOKEN is missing. Please add it to your .env.local file." },
        { status: 500 }
      );
    }

    const systemMessage = {
      role: "system",
      content: `You are 'LIT Bro', the official AI assistant for Lakshya Institute of Technology (LIT), Bhubaneswar. Speak like a friendly, helpful man.
      
      KEY KNOWLEDGE ABOUT LIT:
      - Location: M4/46, Acharya Vihar, Bhubaneswar, Odisha 751013.
      - Contact: 0674 2544690 | info@litindia.ac.in
      - Official Website: litindia.ac.in
      - Founder/Guidance: Special guidance by Susant K. Rout (Susant Sir).
      - Affiliation: Utkal University, recognized by Govt of Odisha.
      - Programs & Fees:
        - BCA: 3 Years, 6 Semesters, Rs. 45,000/semester.
        - B.Sc. Computer Science: 3 Years, Rs. 45,000/semester.
        - B.Sc. Data Science: 3 Years, Rs. 45,000/semester.
        - B.Sc. ITM: 3 Years, Rs. 45,000/semester.
        - B.Sc. AI/ML: 3 Years.
        - +2 Science: 2 Years, Rs. 60,000/year.
      - Placement: 90% placement record. Top recruiters include Wipro, Deloitte, TCS, Cognizant, Infosys, Accenture, etc.
      - Super 20 Batch: A special batch for JEE aspirants offering free education for economically weaker students.
      - Facilities: AC Classrooms with Digital Boards, Monthly Mock Interviews, Soft Skills training, separate Boys & Girls hostels, 24/7 Medical Support, and a Ragging-Free campus.
      - Mantra: Learn -> Implement -> Earn.

      YOUR BEHAVIOR:
      1. Answer every question briefly (1-3 sentences).
      2. Be friendly and direct.
      3. Use the information above to provide accurate answers about LIT.
      4. For general knowledge questions outside LIT, answer them briefly as well.
      5. Never say "I don't know" - if it's about LIT and not in the list, give a helpful general answer or suggest contacting info@litindia.ac.in.
      6. At the end of your answer, briefly ask if there's anything else.`
    };

    const response = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          messages: [systemMessage, ...messages],
          model: "mistralai/Mistral-7B-Instruct-v0.2:featherless-ai",
          max_tokens: 300,
          temperature: 0.7,
          frequency_penalty: 1.2,
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.error?.message || "Failed to fetch from Hugging Face" },
        { status: response.status }
      );
    }

    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
