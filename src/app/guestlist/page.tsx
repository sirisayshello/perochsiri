'use client'

import { ReactNode } from "react";
import { useIsAdmin } from "../hooks/useIsAdmin";
import { useRSVP } from "../rsvp/useRSVP";

const Column = ({ children }: { children?: ReactNode }) => (
    <p className="text-4xl text-center">{children}</p>
)

export default function Guestlist() {
    const { rsvp } = useRSVP();
    const isAdmin = useIsAdmin();

    if (!isAdmin) {
        return null;
    }

    const totalMeat = rsvp?.reduce((acc, guest) => acc + (guest.food === 'kött' ? 1 : 0), 0);
    const totalVeg = rsvp?.reduce((acc, guest) => acc + (guest.food === 'vegetarisk' ? 1 : 0), 0);
    const totalVegan = rsvp?.reduce((acc, guest) => acc + (guest.food === 'vegan' ? 1 : 0), 0);
    const total = rsvp.filter((guest) => guest.attending).length;

    return (<div className="flex flex-col items-center h-full">
        <h1>RSVP Admin</h1>
        <div className="grid grid-cols-5 w-96 border-b-2 border-accent">
            <Column>ID</Column>
            <Column>Namn</Column>
            <Column>Mat</Column>
            <Column>Allergier</Column>
            <Column>Kommer?</Column>
        </div>
        {rsvp?.map((guest) => (
            <div className="grid grid-cols-5 w-96" key={guest.id}>
                <Column>{guest.id}</Column>
                <Column>{guest.name}</Column>
                <Column>{guest.food}</Column>
                <Column>{guest.allergies}</Column>
                <Column>{guest.attending ? "Ja" : "Nej"}</Column>
            </div>
        ))}
        <h1>Totalt</h1>
        <div className="grid grid-cols-4 w-96 border-b-2 border-accent">
            <Column>Totalt</Column>
            <Column>Kött</Column>
            <Column>Vegetarisk</Column>
            <Column>Vegan</Column>
        </div>
        <div className="grid grid-cols-4 w-96 border-b-2 border-accent">
            <Column>{total}</Column>
            <Column>{totalMeat}</Column>
            <Column>{totalVeg}</Column>
            <Column>{totalVegan}</Column>
        </div>
    </div>)
}