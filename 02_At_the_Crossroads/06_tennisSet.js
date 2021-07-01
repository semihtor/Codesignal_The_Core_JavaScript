function tennisSet(score1, score2) {

	var maxScore = Math.max(score1, score2);
	var minScore = Math.min(score1, score2);
	return (maxScore === 6 && minScore < 5) || (maxScore === 7) && (minScore > 4) && (minScore < 7);
}
