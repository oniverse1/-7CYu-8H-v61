function calculateStartupBrandValue() {
    const uniqueness = parseFloat(document.getElementById('uniqueness').value) || 0;
    const problemSolving = parseFloat(document.getElementById('problemSolving').value) || 0;
    const targetMarketFit = parseFloat(document.getElementById('targetMarketFit').value) || 0;
    const growthPotential = parseFloat(document.getElementById('growthPotential').value) || 0;
    const teamExpertise = parseFloat(document.getElementById('teamExpertise').value) || 0;
    const brandConsistency = parseFloat(document.getElementById('brandConsistency').value) || 0;

    const brandValue = (
        (uniqueness * 0.25) +
        (problemSolving * 0.2) +
        (targetMarketFit * 0.2) +
        (growthPotential * 0.15) +
        (teamExpertise * 0.1) +
        (brandConsistency * 0.1)
    ).toFixed(2);

    const brandPotential = (brandValue / 10 * 100).toFixed(2);

    let interpretation = "";
    if (brandValue >= 9) {
        interpretation = "Exceptional startup brand potential. Strong foundation for rapid growth and market disruption.";
    } else if (brandValue >= 7) {
        interpretation = "High startup brand potential. Well-positioned for growth with a clear value proposition.";
    } else if (brandValue >= 5) {
        interpretation = "Moderate startup brand potential. Some strengths, but improvements needed in key areas.";
    } else if (brandValue >= 3) {
        interpretation = "Low startup brand potential. Significant work needed to strengthen brand and market position.";
    } else {
        interpretation = "Very low startup brand potential. Fundamental reassessment of brand strategy and offering required.";
    }

    document.getElementById('brandValueScore').innerText = `Startup Brand Value Score: ${brandValue} / 10`;
    document.getElementById('brandPotential').innerText = `Brand Growth Potential: ${brandPotential}%`;
    document.getElementById('interpretation').innerText = `Interpretation: ${interpretation}`;
}