export default function CreatureInfo({ creature }) {
    if (!creature) return null;

    const creatureTypes = Array.isArray(creature.types)
    ? creature.types.map((t) => t.type.name).join(", ")
    : "-";

    return (
        <>
            <section className="creature-info">
                <h1>{creature.name}</h1>
                <p>ID: {creature.id}</p>
                <p>Weight: {creature.weight}</p>
                <p>Height: {creature.height}</p>
                <p>Type: {creatureTypes}</p>
            </section>
        </>
    )
}