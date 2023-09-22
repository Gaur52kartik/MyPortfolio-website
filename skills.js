let portfolioSkillsBlock = document.querySelector(".portfolioSkillsBlock");
for (let i = 0; i < portfolioSkillsBlock.children.length; i++) {
  let portfolioSkillsCircularMeter =
    portfolioSkillsBlock.children[i].children[0];
  let portfolioSkillsCircularAreaColor =
    portfolioSkillsCircularMeter.getAttribute(
      "portfolioSkillsCircularAreaColor"
    );
  // console.log(portfolioSkillsCircularAreaColor);
  let portfolioSkillsCircularMeterPercent =
    portfolioSkillsCircularMeter.children[0];
  let meterStartValue = 0;
  let meterEndValue = portfolioSkillsCircularMeterPercent.textContent;
  let speed = 10;
  let portfolioSkillsCircularMeterStop = setInterval(() => {
    meterStartValue++;
    portfolioSkillsCircularMeterPercent.textContent = `${meterStartValue}%`;
    portfolioSkillsCircularMeter.style.background = `conic-gradient(${portfolioSkillsCircularAreaColor} ${
      meterStartValue * 3.6
    }deg, white 0deg)`;
    // meterEndValue=(meterEndValue-1);
    portfolioSkillsCircularMeter.style.padding = `${meterEndValue-20}px`;
    // portfolioSkillsCircularMeter.style.transform = `rotate(${meterEndValue}deg)`;
    // portfolioSkillsCircularMeterPercent.style.transform = `rotate(-${meterEndValue}deg)`;
    if (meterStartValue == meterEndValue) {
      clearInterval(portfolioSkillsCircularMeterStop);
    }
  }, speed);
}
