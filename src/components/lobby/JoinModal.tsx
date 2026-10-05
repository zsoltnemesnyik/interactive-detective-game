"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { JOIN_MODAL } from "@/lib/strings";
import { PlayerClientQueries } from "@/lib/client-queries";

const JoinModal = ({
  sessionId,
  onClose,
}: {
  sessionId: string;
  onClose: () => void;
}) => {
  const [name, setName] = useState<string>("");

  const handleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = await PlayerClientQueries.addPlayerToSession(sessionId, name);

    if (data) {
      localStorage.setItem(`player_id_${sessionId}`, data.id);
      onClose();
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{JOIN_MODAL.heading}</DialogTitle>
          <DialogDescription>{JOIN_MODAL.description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleJoin}>
          <FieldGroup>
            <FieldSet>
              <Field>
                <FieldLabel htmlFor="joinModalNameInput">
                  {JOIN_MODAL.nameLabel}
                </FieldLabel>
                <Input
                  id="joinModalNameInput"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Név ..."
                  required
                />
              </Field>
              <Field orientation="horizontal">
                <Button type="submit">Mentés</Button>
              </Field>
            </FieldSet>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JoinModal;
