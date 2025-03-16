'use client'

import { useEffect, useState } from "react";
import { useIsAdmin } from "../hooks/useIsAdmin";


export type RSVP = {
    id: number;
    name: string;
    food: string;
    allergies: string;
    attending: boolean;
}

export const useRSVP = () => {
    const isAdmin = useIsAdmin();
    const [rsvp, setRSVP] = useState<RSVP[]>([]);
    const apiUrl = process.env.NEXT_PUBLIC_RSVP_API_URL ?? '';


    const saveRSVP = async (guests: Omit<RSVP, 'id'>[]) => {
        const res = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify({ guests }),
        });

        if (res.ok) {
            const data = await res.json();

            setRSVP(data);
        }

    }

    useEffect(() => {
        if (!isAdmin) {
            return;
        }
        const fetchRSVP = async () => {
            const res = await fetch(apiUrl);
            if (res.ok) {
                const data = await res.json();

                setRSVP(data.rsvp);
            }
        }
        console.log('fetching RSVP');

        fetchRSVP();
    }, [isAdmin])


    return {
        rsvp,
        saveRSVP
    }
}