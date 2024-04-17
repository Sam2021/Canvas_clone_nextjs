"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

import { useToast } from "@/components/ui/use-toast";

import { Button } from "../ui/button";

const Checkout = () => {
    const { toast } = useToast()

  return (
    <form>
      <section>
        <Button
          type="submit"
          role="link"
          className="w-full rounded-full bg-purple-gradient bg-cover"
          onClick={() => {
            toast({
              title: "Checkout Update",
              description: "Due to some Issue checkout function is not implemented",
              duration: 20000,
              className: 'error-toast' 
            })
          }}
        >
          Buy Credit
        </Button>
      </section>
    </form>
  );
};

export default Checkout;