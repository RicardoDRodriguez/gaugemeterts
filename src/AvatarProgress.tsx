import React, { useState, useEffect } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

import DataBaseForGauge from './DataBaseForGauge';

const database = new DataBaseForGauge();

interface Participant {
    sala: string;
    id: number;
    sequencia: number;
    nome: string;
    avatar: string;
    entradaNaSala: number;
    tempoDeFala: number;
    fatorRiquezaAbsoluta: number;
    tempoPresenca: number;
    fatorTempoPresenca: number;
    fatorAcumuladoPresenca: number;
    populacaoAcumulada: number;
    percentualAcumuloFala: number;
    proporcaoAcumuladaPopulacao: number;
    fatorAcumuladoCurvaLorenz: number;
  
}

const AvatarProgress: React.FC = () => {
  const [participantsProgress, setParticipantsProgress] = useState<Participant[]>([]);

  useEffect(() => {
    const fetchParticipants = async () => {
      const participants = await database.getParticipantesPercentualAcumuloFala();
      setParticipantsProgress(participants);
    };

    fetchParticipants();

    const interval = setInterval(async () => {
      const participants = await database.getParticipantesPercentualAcumuloFala();
      setParticipantsProgress((prevParticipants) =>
        prevParticipants.map((participant) => ({
          ...participant,
          percentualAcumuloFala: participant.fatorRiquezaAbsoluta < 0 ? 0 : participant.fatorRiquezaAbsoluta * 100,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {participantsProgress.map((participant) => (
        <div key={participant.id}>
          <span style={{ marginRight: '10px' }}>{participant.nome}</span>
          <ProgressBar
            completed={participant.percentualAcumuloFala.toFixed(1)}
            customLabel={`${participant.percentualAcumuloFala.toFixed(1)}%`}
            labelAlignment="outside"
            labelColor="black"
            bgColor="#ef6c00"
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarProgress;
