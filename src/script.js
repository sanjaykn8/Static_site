const repos = [
    {
        repo:"RUST",
        desc:"small rust codes",
        url:"https://github.com/sanjaykn8/RUST"
    },
    {
        repo:"Small LLM",
        desc:"a SLM not a LLM(Still smarter than me fr)",
        url:"https://github.com/sanjaykn8/Dumb_ahh_LLM"
    },
    {
        repo:"GATE resources",
        desc:"GATE study material",
        url:"https://github.com/sanjaykn8/Gate_Prep"
    },
    {
        repo:"GO",
        desc:"seriuos go codes",
        url:"https://github.com/sanjaykn8/GO"
    },
    {
        repo:"A bot(npc fr)",
        desc:"a model that can play",
        url:"https://github.com/sanjaykn8/DQL"
    },
    {
        repo:"JAVA file name editor",
        desc:"try it on program file x86",
        url:"https://github.com/sanjaykn8/JavaMalware"
    },
]

const list = document.getElementById("repo-list")

list.innerHTML = "";
repos.forEach(r => {
    const li = document.createElement("li");
    li.className = "repo-item";
    li.innerHTML = `
      <a class="repo-link" href="${r.url}" target="_blank" rel="noreferrer">
        <div class="repo-head">
          <span class="repo-title">${r.repo}</span>
          <span class="repo-badge">repo</span>
        </div>
        <p class="repo-desc">${r.desc}</p>
      </a>
    `;
    list.appendChild(li);
});
