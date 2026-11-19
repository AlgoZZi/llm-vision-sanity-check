const works = [
  {
    id: "3d-tihu",
    model: "Claude Sonnet 5.5",
    file: "3d-tihu.html",
    title: "鹈鹕骑车 · 3D",
    description: "一只骑着自行车的鹈鹕，在三维场景中前行。",
    hint: "可拖动旋转视角，滚轮缩放。此作品需要联网加载 Three.js。",
  },
  {
    id: "axolotl-ride",
    model: "Claude Sonnet 5.5",
    file: "axolotl_ride.html",
    title: "美西螈与机械鹈鹕",
    description: "二八大杠、机械鹈鹕，还有一路变换的四季。",
    hint: "可在作品内切换季节或暂停动画，也可使用数字键和空格键。",
  },
  {
    id: "giraffe-dark-forest",
    model: "GPT-6.1 Sol",
    file: "giraffe-dark-forest.svg",
    title: "月光森林骑行手记",
    description: "月光落进森林，长颈鹿的骑行故事慢慢展开。",
    hint: "SVG 动画会自动播放，画面按原始比例完整显示。",
  },
  {
    id: "giraffe-night-ride",
    model: "GPT-6.1 Sol",
    file: "giraffe-night-ride.svg",
    title: "青岚关夜骑",
    description: "夜色中的青岚关，一段长颈鹿的骑行旅程。",
    hint: "SVG 动画会自动播放，画面按原始比例完整显示。",
  },
  {
    id: "pelican-bicycle",
    model: "GPT-6.1 Sol",
    file: "pelican-bicycle.svg",
    title: "鹈鹕骑自行车",
    description: "一只鹈鹕与一辆自行车，定格成一幅小插画。",
    hint: "这是一幅静态 SVG 插画，可通过“新窗口打开”单独查看。",
  },
  {
    id: "qinshihuang-polar-bear",
    model: "GPT-6.1 Sol",
    file: "qinshihuang-polar-bear.html",
    title: "秦始皇骑北极熊",
    description: "秦始皇骑着北极熊，在飘雪的画面中出场。",
    hint: "动画会自动播放，可通过“新窗口打开”获得更大的展示空间。",
  },
  {
    id: "tengwang-jiangtian-scroll",
    model: "GPT-6.1 Sol",
    file: "滕王阁_江天长卷_27镜.html",
    title: "滕王阁 · 江天长卷（27镜）",
    description: "以二十七镜展开滕王阁的江天长卷。",
    hint: "此作品需要联网加载 Three.js，可通过“新窗口打开”获得更大的展示空间。",
  },
  {
    id: "tengwang-kongziliu",
    model: "GPT-6.1 Sol",
    file: "滕王阁_空自流.html",
    title: "滕王阁 · 空自流",
    description: "江水悠悠，展开一幅滕王阁的诗意画面。",
    hint: "此作品需要联网加载 Three.js，可通过“新窗口打开”单独欣赏。",
  },
  {
    id: "tengwang-shuitian-guiren",
    model: "GPT-6.1 Sol",
    file: "滕王阁_水天归人_27镜.html",
    title: "滕王阁 · 水天归人（27镜）",
    description: "二十七镜串起滕王阁、水天与归人的故事。",
    hint: "此作品需要联网加载 Three.js，可通过“新窗口打开”获得更大的展示空间。",
  },
  {
    id: "giraffe-yedu-guguan",
    model: "GPT-6.1 Sol",
    file: "长颈鹿骑行_夜渡古关.svg",
    title: "长颈鹿骑行 · 夜渡古关",
    description: "长颈鹿踏上夜路，骑行穿过古关。",
    hint: "画面按原始比例完整显示，可通过“新窗口打开”单独欣赏 SVG 作品。",
  },
  {
    id: "ocean-under-dome-61s-k",
    model: "GPT-6.1 Sol",
    file: "穹顶下的海洋-6.1s-K.html",
    title: "穹顶下的海洋（6.1s-K）",
    description: "穹顶下的海洋场景，保留 6.1s-K 版本独立展示。",
    hint: "Three.js 已内置，可通过“新窗口打开”获得更大的展示空间。",
  },
  {
    id: "ocean-under-dome",
    model: "GPT-6.1 Sol",
    file: "穹顶下的海洋.html",
    title: "穹顶下的海洋",
    description: "在穹顶之下，走进一片海洋世界。",
    hint: "Three.js 已内置，可通过“新窗口打开”获得更大的展示空间。",
  },
  {
    id: "axolotl-season-ride",
    model: "GPT-6.2 Sol",
    file: "axolotl-season-ride.html",
    title: "四季骑游",
    description: "跟着美西螈出发，骑过春夏秋冬。",
    hint: "可在作品内切换季节、暂停或重新开始；窄屏下可在作品内滚动。",
  },
  {
    id: "beaver-stream",
    model: "GPT-6.2 Sol",
    file: "beaver-stream.html",
    title: "溪畔轻拍",
    description: "溪水、河狸与轻轻荡开的涟漪，一段六秒小动画。",
    hint: "动画会自动循环播放，画面按原始比例适配展示区。",
  },
  {
    id: "crane-after-rain",
    model: "GPT-6.2 Sol",
    file: "crane-after-rain.html",
    title: "雨歇 · 青石桥",
    description: "雨后的青石桥边，留下一幅清静的国风画面。",
    hint: "画面在加载时生成，可通过“新窗口打开”单独欣赏。",
  },
  {
    id: "giraffe-night-ride-777E0AEE",
    model: "GPT-6.2 Sol",
    file: "giraffe-night-ride-777E0AEE.svg",
    title: "松门夜渡",
    description: "穿过松林与夜色，继续一场不紧不慢的骑行。",
    hint: "SVG 动画会自动播放，画面按原始比例完整显示。",
  },
  {
    id: "night-pass",
    model: "GPT-6.2 Sol",
    file: "night-pass.svg",
    title: "霜夜过关",
    description: "霜色铺满夜路，长颈鹿骑车穿过关隘。",
    hint: "SVG 动画会自动播放，画面按原始比例完整显示。",
  },
  {
    id: "last-night-watch",
    model: "GPT-6.2 Sol",
    file: "最后的守夜.html",
    title: "最后的守夜",
    description: "一段以“最后的守夜”为题的 Canvas 画面。",
    hint: "可通过“新窗口打开”获得更大的展示空间。",
  },
];

const elements = {
  list: document.querySelector("#work-list"),
  model: document.querySelector("#address-model"),
  title: document.querySelector("#work-title"),
  description: document.querySelector("#work-description"),
  format: document.querySelector("#work-format"),
  original: document.querySelector("#open-original"),
  content: document.querySelector("#preview-content"),
  stage: document.querySelector("#preview-stage"),
  message: document.querySelector("#preview-message"),
  hint: document.querySelector("#work-hint"),
  statusModel: document.querySelector("#status-model"),
  statusFile: document.querySelector("#status-file"),
  statusPosition: document.querySelector("#status-position"),
};

const buttons = new Map();
let currentWorkId = null;

function isSvg(work) {
  return work.file.endsWith(".svg");
}

function createIcon(name) {
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  icon.classList.add("icon");
  icon.setAttribute("aria-hidden", "true");
  use.setAttribute("href", `#icon-${name}`);
  icon.append(use);
  return icon;
}

function createNavigation() {
  const models = [...new Set(works.map((work) => work.model))];

  for (const [index, model] of models.entries()) {
    const modelWorks = works.filter((work) => work.model === model);
    const group = document.createElement("section");
    const heading = document.createElement("h2");
    const count = document.createElement("span");
    const list = document.createElement("ul");

    group.className = "model-group";
    heading.className = "model-heading";
    heading.id = `model-${index}`;
    heading.textContent = model;
    group.setAttribute("aria-labelledby", heading.id);
    count.className = "model-count";
    count.textContent = modelWorks.length;
    count.setAttribute("aria-label", `${modelWorks.length} 个作品`);
    heading.append(count);
    list.className = "model-works";

    for (const work of modelWorks) {
      const item = document.createElement("li");
      const button = document.createElement("button");
      const name = document.createElement("span");

      button.type = "button";
      button.className = "work-button";
      button.dataset.workId = work.id;
      button.title = `${work.title} · ${work.file}`;
      button.setAttribute("aria-controls", "preview-content");
      name.className = "work-name";
      name.textContent = work.title;
      button.append(createIcon(isSvg(work) ? "picture" : "html"), name);
      button.addEventListener("click", () => {
        window.location.hash = work.id;
      });
      buttons.set(work.id, button);
      item.append(button);
      list.append(item);
    }

    group.append(heading, list);
    elements.list.append(group);
  }
}

function showWork(work) {
  if (currentWorkId === work.id) return;
  currentWorkId = work.id;

  const svg = isSvg(work);
  const source = `./works/${encodeURIComponent(work.file)}`;
  const artwork = document.createElement(svg ? "img" : "iframe");

  for (const [id, button] of buttons) {
    if (id === work.id) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  }

  document.title = `${work.title} · 模型作品展示`;
  elements.model.textContent = work.model;
  elements.title.textContent = work.title;
  elements.description.textContent = work.description;
  elements.format.textContent = svg ? "SVG" : "HTML";
  elements.original.href = source;
  elements.original.setAttribute("aria-label", `在新窗口打开${work.title}`);
  elements.hint.textContent = work.hint;
  elements.statusModel.textContent = work.model;
  elements.statusFile.textContent = work.file;
  elements.statusPosition.textContent = `${works.indexOf(work) + 1} / ${works.length}`;
  elements.stage.setAttribute("aria-busy", "true");
  elements.message.hidden = false;
  elements.message.replaceChildren();

  const spinner = document.createElement("span");
  spinner.className = "loading-indicator";
  spinner.setAttribute("aria-hidden", "true");
  elements.message.append(spinner, document.createTextNode("正在打开作品…"));

  artwork.className = "artwork";

  if (svg) {
    artwork.alt = `${work.title}，由 ${work.model} 生成`;
  } else {
    artwork.title = `${work.title} · ${work.model}`;
    artwork.setAttribute("sandbox", "allow-scripts");
    artwork.setAttribute("allow", "fullscreen");
    artwork.setAttribute("referrerpolicy", "no-referrer");
  }

  artwork.addEventListener("load", () => {
    if (currentWorkId !== work.id) return;
    elements.stage.setAttribute("aria-busy", "false");
    elements.message.hidden = true;
  });

  artwork.addEventListener("error", () => {
    if (currentWorkId !== work.id) return;
    elements.stage.setAttribute("aria-busy", "false");
    elements.message.textContent = "作品暂时没有打开，请重试或点击“新窗口打开”。";
    elements.message.hidden = false;
  });

  artwork.src = source;
  elements.content.replaceChildren(artwork);
}

function showWorkFromHash() {
  let id;
  try {
    id = decodeURIComponent(window.location.hash.slice(1));
  } catch {
    id = "";
  }

  const work = works.find((item) => item.id === id) || works[0];
  showWork(work);
}

createNavigation();
showWorkFromHash();
window.addEventListener("hashchange", showWorkFromHash);
