'use client'

import { H1 } from "../components/H1"
import { useIsAdmin } from "../hooks/useIsAdmin";
import { useRSVP } from "../rsvp/useRSVP";

export default function () {
    const { rsvp } = useRSVP();
    const isAdmin = useIsAdmin();

    if (!isAdmin) {
        return null;
    }

    return (<div className="flex flex-col items-center h-full">
        <H1>RSVP Admin</H1>
        {rsvp?.map((guest) => (
            <div className="flex gap-2" key={guest.id}>
                <p>{guest.name}</p>
                <p>{guest.food}</p>
                <p>{guest.allergies}</p>
            </div>
        ))}
    </div>)
}