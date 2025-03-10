'use client'

import { useEffect, useState } from "react";
import { useIsAdmin } from "../hooks/useIsAdmin";


type RSVP = {
    id: number;
    name: string;
    food: string;
    allergies: string;
}

export const useRSVP = () => {
    const isAdmin = useIsAdmin();
    const [rsvp, setRSVP] = useState<RSVP[]>([]);
    const rsvpApiUrl = process.env.RSVP_API_URL ?? "";


    const saveRSVP = async (guests: Omit<RSVP, 'id'>[]) => {
        const res = await fetch("https://baltzar-rsvp.web.val.run", {
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
            const res = await fetch("https://baltzar-rsvp.web.val.run");
            console.log('url:', rsvpApiUrl);

            if (res.ok) {
                const data = await res.json();

                console.log('fetching', data);

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