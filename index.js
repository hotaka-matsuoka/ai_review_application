// おみくじの結果の配列
const results = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];

// ランダムなインデックスを作成
const randomIndex = Math.floor(Math.random() * results.length);

// 結果の配列からランダムな結果を取得
const result = results[randomIndex];

// 結果を表示
console.log("あなたの運勢は..." + result + "です！");
