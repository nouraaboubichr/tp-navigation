function ListeTaches() {
  const taches = [
    { id: 1, titre: 'Apprendre React' },
    { id: 2, titre: 'Créer une application' },
    { id: 3, titre: 'Tester le code' },
  ];

  return (
    <div>
      <h3>Liste des tâches à accomplir</h3>
      <ul>
        {taches.map((tache) => (
          <li key={tache.id}>{tache.titre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeTaches;