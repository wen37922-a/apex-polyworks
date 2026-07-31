"use client";

import { useEffect } from "react";
import { queuePendingRfqConversion } from "@/lib/google-ads";

export function GoogleAdsRfqConversion() {
  useEffect(() => {
    void queuePendingRfqConversion();
  }, []);

  return null;
}
