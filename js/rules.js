// Define Nenkin rule 2021
// If you have been working, then apply to Kosei Nenkin
// If you have not been workin, those time should be count as Kokumin Nenkin


(function() {
  let nenkinRule = document.querySelector(".rules");

  let rules = [
    {
      name: "Kosei Nenkin",
      class: "kosei",
      condition: ["rule1", "rule2"],
      calculation: "被保険者であった期間の平均標準報酬額（※2）×支給率（※3）",
      sample: "252,545 *4.9 *(0.183/2) = ¥113,228",
    },
    {
      name: "Kokumin Nenkin",
      class: "kokumin",
      condition: ["rule3", "rule4"],
      calculation: "（１）被保険者であった期間の平均標準報酬額 ×（２）支給率（保険料率×2分の1×支給額計算に用いる数）",
      sample: "252,545 * ( 0.183/2 *55) = ¥1,270,932",
    },
  ];

  let nenkinData = "";

  for (rule of rules) {
    nenkinData += `<div class="section ${rule.class}">
    <h3>${rule.name} rules:</h3>
    <ul>
        <li>Condition: ${rule.condition[0]}</li>
        <li>Condition: ${rule.condition[1]}</li>
    </ul>
    <p>Calculation: ${rule.calculation}</p>
    <p>Sample: ${rule.sample}</p>

    </div>`;
  }

  nenkinRule.innerHTML = nenkinData;
})();
