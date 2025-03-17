'use client';

import { useGiftActions } from './useGiftActions';
import { Gift as GiftType } from './useGifts';

export const Gift = (gift: GiftType) => {
    const { markAsTaken, isUsersGift, markAsUntaken } = useGiftActions()
    const canMarkAsUntaken = isUsersGift(gift) && gift.taken;
    const canMarkAsTaken = !gift.taken;


    const handleClick = () => {
        if (canMarkAsUntaken) {
            markAsUntaken(gift);
        } else if (!gift.taken) {
            markAsTaken(gift);
        }
    }
    return (
        <li key={gift.name} className={gift.taken ? 'line-through' : ''}>
            {gift.name}
            <p>{gift.description}</p>
            <a href={gift.link}>Länk</a>
            {(canMarkAsTaken || canMarkAsUntaken) && <button onClick={handleClick}>{canMarkAsUntaken ? "Jag har ångrat mig" : "Den här vill jag ge!"}</button>}
        </li>);
}