export default function StatsTable({ creature }) {
    if (!creature) return null;
    
    const getStatValue = (name) => {
        const stat = creature.stats?.find((s) => s?.stat.name === name);
        return stat?.base_stat ?? "N/A";
    };

    return (
        <>
            <table className="output-group">
                <thead>
                    <tr>
                        <th>Base</th>
                        <th>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>HP</th>
                        <td id="hp">{getStatValue("hp")}</td>
                    </tr>
                    <tr>
                        <th>Attack:</th>
                        <td id="attack">{getStatValue("attack")}</td>
                    </tr>
                    <tr>
                        <th>Defense:</th>
                        <td id="defense">{getStatValue("defense")}</td>
                    </tr>
                    <tr>
                        <th>Sp.Attack</th>
                        <td id="special-attack">{getStatValue("special-attack")}</td>
                    </tr>
                    <tr>
                        <th>Sp.Defense</th>
                        <td id="special-defense">{getStatValue("special-defense")}</td>
                    </tr>
                    <tr>
                        <th>Speed:</th>
                        <td id="speed">{getStatValue("speed")}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}