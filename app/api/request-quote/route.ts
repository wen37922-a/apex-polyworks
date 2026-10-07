import { put } from "@vercel/blob";
import { handleRfqRequest } from "@/lib/rfq-request-handler";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return handleRfqRequest(request, { putBlob: put });
}
