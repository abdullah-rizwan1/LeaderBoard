export const Team = (props) => {
    const {rank, teamName, gamesPlayed, score} = props
    return (
        <div className="team">
            <span>{rank}</span>
            <span>{teamName}</span>
            <span>{gamesPlayed}</span>
            <span>{score}</span>
        </div>
    )
}
