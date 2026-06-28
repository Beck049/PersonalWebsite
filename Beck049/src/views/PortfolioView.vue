<script setup lang="ts">
import Tag from '../components/Tag.vue'
import NameCard from '../components/NameCard.vue'
import LanguageButton from '../components/LangTransButton.vue'


import { ref, computed } from "vue";

// get data from LanguageButton
const lang = ref(0)
const receiveLang = (value: number) => {
  lang.value = value
}

</script>
<template>
<div>
  <LanguageButton @updateLang="receiveLang" />

  <div class="profile-page">
    <!-- Top Section -->
    <div class="floating-card" :style="shouldFloat ? { marginTop: positionY + 'px' } : {}"><NameCard :lang="lang" /></div>

    <!-- Bottom Section -->
    <div class="profile-content">
      <!-- About Me -->
      <div class="section">
        <h2><p class="hash"># </p>About_Me</h2>
        <div class="border-style about enableENDL">{{ about[lang] }}</div>
      </div>

      <!-- Educations -->
      <div class="section">
        <h2><p class="hash"># </p>Educations</h2>
        <div class="education-group">
          <div class="education" v-for="(edu, index) in educations" :key="index">
            <div class="border-style image-center"><img :src="edu.img" width=60></div>
            <div class="border-style education-content">
              <i>{{ edu.name[lang] }}</i>
              <i>{{ edu.title[lang] }}</i>
              <i>{{ edu.period }}</i>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div class="section">
        <h2><p class="hash"># </p>Skills</h2>
        <div class="skill-group">
          <div class="skill" v-for="(skill, index) in skills" :key="index">
            <div class="border-style">{{ skill.title }}</div>
            <div class="border-style">
              <p class="skill-list" v-for="(ele, index) in skill.elements" :key="index">{{ele}}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Experiences -->
      <div class="section">
        <h2><p class="hash"># </p>Experiences</h2>
        <div class="experience" v-for="(exp, index) in experiences" :key="index">
          <div class="experience-head">
            <div class="border-style image-center"><img :src="exp.img" width=60></div>
            <div class="border-style experience-data">
              <div class="experience-title">
                <i>{{ exp.title[lang] }}</i>
                <i>{{ exp.name[lang] }}</i>
              </div>
              <div class="text-color">{{ exp.period }}</div>
            </div>
          </div>
          <div class="border-style">
            <p class="enableENDL experience-content" v-html="exp.content[lang]"></p>
            <div class="tag-group">
              <Tag :name="tags" v-for="(tags, index2) in exp.tags" :key="index2" />
          </div>
          </div>
        </div>
      </div>

      <!-- Projects -->
      <div class="section">
        <h2><p class="hash"># </p>Projects</h2>
        <div class="project" v-for="(proj, index) in projects" :key="index">
          <div class="border-style project-head">
            <div class="project-title">
              <i><a :href="proj.link" target="_blank" rel="noopener noreferrer">{{ proj.title[lang] }}</a></i>
            </div>
            <div class="text-color">{{ proj.period }}</div>
          </div>
          <div class="border-style">
            <p class="enableENDL project-content" v-html="proj.content[lang]"></p>
            <div class="tag-group">
              <Tag :name="tags" v-for="(tags, index2) in proj.tags" :key="index2" />
          </div>
          </div>
        </div>
      </div>

      <!-- Certificates -->
      <div class="section">
        <h2><p class="hash"># </p>Certificates</h2>
        <div class="certificate-group">
          <div class="certificate" v-for="(cert, index) in certificates" :key="index">
            <div class="border-style"><a :href="cert.link" target="_blank" rel="noopener noreferrer">{{ cert.title }}</a></div>
            <div><img :src="cert.img"></div>
          </div>
        </div>
      </div>

      <!-- Activities -->
      <div class="section">
        <h2><p class="hash"># </p>Activities</h2>
        <div class="other" v-for="(other, index) in others" :key="index">
          <div class="border-style project-head">
            <div class="other-title">
              <i><a :href="other.link" target="_blank" rel="noopener noreferrer">{{ other.title }}</a></i>
            </div>
          </div>
          <div class="border-style">
            <p class="enableENDL project-content" v-html="other.content[lang]"></p>
            <div class="tag-group">
              <Tag :name="tags" v-for="(tags, index2) in other.tags" :key="index2" />
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
const windowWidth = ref(window.innerWidth);
// need computed to update the value `shouldFloat` every time window change 
const shouldFloat = computed(() => windowWidth.value >= 1000);

window.addEventListener("resize", () => {
  windowWidth.value = window.innerWidth;
});

export default {
  data() {
    return {
      lastPosition: 0,
      isHidden: false,
      positionY: 0,
      about: [
        "我是一名對技術充滿熱情、兼具學術研究深度與產業實務經驗的清大資工碩士生。我擅長從底層追根究底解決複雜問題，並在 AI 醫療影像、生醫演算法、Web 開發 與 雲端架構 等多元領域皆有深入的實作經驗。\n\n目前在清大資工碩士班中，我正專注於研究 circular RNA (circRNA) 疫苗的合成演算法，致力於透過計算科學優化下一代疫苗的結構穩定性與轉譯效率。深刻考驗著我處理高複雜度演算法與底層效能優化的能力，也讓我學會如何以更追根究底的科學視角去應對未知的技術挑戰。\n\n在專注於本業學術研究的同時，我也積極透過業界實務來驗證並深化自己的工程能力。我曾於叡揚資訊擔任助理全端程式設計師，開發跨服務整合平台，透過設計自動流程圖介面與串接 SHOPLINE API，為企業提升了 40% 的自動化流程效率，並成功擴展多家合作企業。目前我則在 PChome 擔任測試工程師，從零開始建構 Playwright E2E 測試框架，達成 97% 覆蓋率，同時也使用 docker 建置了結合串接 SonarQube、Grafana 與 GCP 的 CI/CD 流程，提升了 40% 的部署效率並落實視覺化監控。\n\n結合在學術與業界累積的實務經驗，我已具備優秀的系統程式架構能力與獨立從零建立專案(0 to 1)的即戰力。與此同時，這些經驗也讓我在挑戰中不斷成長，並能夠在壓力下有效應對各種挑戰，保持高效的工作表現。",
        "I am a highly motivated Computer Science Master's student at National Tsing Hua University (NTHU), combining academic depth with hands-on industry experience. Driven by a first-principles approach to solving complex problems, I possess a proven track record across diverse domains, including AI medical imaging, biomedical algorithms, web development, and cloud architecture.\n\nCurrently, my graduate research focuses on developing synthesis algorithms for circular RNA (circRNA) vaccines. By leveraging computational science to optimize structural stability and translation efficiency for next-generation vaccines, I consistently tackle high-complexity algorithms and low-level performance optimization—honing my ability to address unknown technical challenges with scientific rigor.\n\nIn parallel with my academic pursuits, I actively validate and sharpen my engineering skills through industry experience. As an Assistant Full-Stack Developer at GSS, I developed a cross-service integration platform. By designing an automated flowchart interface and integrating the SHOPLINE API, I boosted enterprise workflow automation efficiency by 40% and successfully expanded our corporate client base. Currently, as a QA Engineer at PChome, I built a Playwright E2E testing framework from scratch, achieving 97% test coverage. I also established a Docker-based CI/CD pipeline integrated with SonarQube, Grafana, and GCP, which accelerated deployment efficiency by 40% and enabled robust visual monitoring.\n\nBlending academic insights with industry expertise, I have developed strong system architecture skills and the '0-to-1' capability to launch projects from the ground up. These experiences have reshaped my resilience, enabling me to thrive under pressure and consistently deliver high-performance results.",
      ],
      educations: [
        {
          img: "/icons/NTHU.jpg", name:["國立清華大學", "National Tsing Hua University"], 
          title:["資訊工程 碩士", "Master's degree, Computer Science"], period:"2025/09 ~ 2027/06"
        },
        {
          img: "/icons/NTNU.png", name:["國立台灣師範大學", "National Taiwan Normal University"], 
          title:["資訊工程 學士", "Bachleor's degree, Computer Science"], period:"2019/09 ~ 2024/06"
        },
      ],
      experiences: [
        {
          img:"/icons/PChome.png", name:["網路家庭國際資訊(股)公司", "PChome Online Corporation"], title:["軟體工程師", "Software Engineer"], period:"2025/06 ~ 2026/07",
          content:["<b style='font-weight:900;font-size:1rem;'>- 自動化測試架構：</b>從零建構 Playwright E2E 測試框架，跨多個 end point 專案落實 RWD、廣告攔截與視覺驗證，使測試覆蓋率達 97%。\n<b style='font-weight:900;font-size:1rem;'>- DevOps 與監控自動化：</b>建置 GitHub Action、Jenkins 與 Docker 流程，串接 SonarQube、Grafana 與 GCP，提升 40% 部署效率並落實視覺化監控。\n<b style='font-weight:900;font-size:1rem;'>- 效能與壓力測試：</b>運用 Postman 建立 API 規範，並導入 Puppeteer 與 k6 模擬複雜商務流程，成功建構後端系統的高併發壓力測試。",
                  "<b style='font-weight:900;font-size:1rem;'>- Automated Testing Architecture: </b>Built a Playwright E2E testing framework from scratch; implemented RWD, ad-blocking, and visual validation across multiple endpoint projects, achieving a 97% test coverage rate.\n <b style='font-weight:900;font-size:1rem;'>- DevOps & Automated Monitoring: </b>Established GitHub Actions, Jenkins, and Docker workflows integrated with SonarQube, Grafana, and GCP, accelerating deployment efficiency by 40% and realizing comprehensive visual monitoring.\n <b style='font-weight:900;font-size:1rem;'>- Performance & Load Testing: </b>Utilized Postman to standardize API specifications; leveraged Puppeteer and k6 to simulate complex business workflows, successfully conducting high-concurrency load testing for backend systems."],
          tags: ["Jenkins", "Playwright", "CI/CD", "Grafana"],
        },
        {
          img:"/icons/GSS.png", name:["叡揚資訊股份有限公司", "Galaxy Software Services Corporation"], title:["助理全端程式設計師", "Assistant Software Engineer"], period:"2023/01 ~ 2023/07",
          content:["<b style='font-weight:900;font-size:1rem;'>- 開發跨服務整合平台：</b>設計並實作自動流程圖介面，整合公司 SaaS 服務以及 Google 相關功能，提升自動化流程效率 40%，降低客戶手動設定時間。\n<b style='font-weight:900;font-size:1rem;'>- 串接 SHOPLINE API：</b>負責 API 串接，讓公司服務無縫連接外部電商平台，成功擴展 5+ 家合作企業，提高企業應用靈活度。\n<b style='font-weight:900;font-size:1rem;'>- 提升系統效能與維護性：</b>使用 React.js、MySQL、.NET framework 進行開發與優化",
                  "<b style='font-weight:900;font-size:1rem;'>- Cross-Service Integration:</b> Designed an automated flowchart interface, integrating SaaS and Google services to boost automation by 40% and reduce setup time.\n <b style='font-weight:900;font-size:1rem;'>- SHOPLINE API Integration:</b> Led API integration, expanding partnerships with 5+ businesses and enhancing platform flexibility.\n<b style='font-weight:900;font-size:1rem;'>- System Optimization:</b> Improved performance and maintainability using React.js, MySQL, and .NET."],
          tags: [".Net Framework", "React.js", "MySQL"],
        },
      ],
      skills: [
        { title: "Language", elements: ["C/C++ Python", "javascript Go"], },
        { title: "Security", elements: ["Kali Linux", "Burp Suite", "Wireshark", "Ghidra"], },
        { title: "Cloud", elements: ["AWS", "GCP"], },
        { title: "Frontend", elements: ["vue.js", "React.js"], },
        { title: "Backend", elements: ["node.js", "gin", "GraphQL"], },
        { title: "Database", elements: ["MySQL", "MongoDB", "PostgreSQL"], },
        { title: "Testing", elements: ["Selenium", "Playwright", "Postman"], },
        { title: "CI/CD", elements: ["Github Action", "Jenkins", "Grafana", "SonarQube"], },
      ],
      projects: [
        {
          title:["AWS 校園智慧外送儲物櫃系統", "AWS-Powered Campus Smart Delivery Locker System"], period:"2024/05~2024/06",
          content:["<b style='font-weight:900;font-size:1rem;'>- 雲端後端與雙向通訊：</b> 整合 AWS IoT Core 與 Lambda 設計 10+ 項核心功能。\n<b style='font-weight:900;font-size:1rem;'>- 邊緣運算與高可用容錯：</b> 導入 AWS IoT Device Shadow，實現斷網下的離線驗證與開鎖容錯。\n<b style='font-weight:900;font-size:1rem;'>- 多櫃位擴充性：</b>設計具高擴充性的 GPIO 架構，可彈性支援多組置物箱，大幅提升硬體資源利用率。",
                  "<b style='font-weight:900;font-size:1rem;'>- Cloud Backend & Bidirectional Communication:</b> Integrated AWS IoT Core and Lambda to architect and deploy over 10 core system functionalities.\n<b style='font-weight:900;font-size:1rem;'>- Edge Computing & High-Availability Fault Tolerance:</b> Implemented AWS IoT Device Shadow to enable offline verification and resilient locker-unlocking mechanisms during network disruptions.\n<b style='font-weight:900;font-size:1rem;'>- Multi-Locker Scalability:</b> Designed a highly scalable GPIO architecture to flexibly support multiple locker compartments, significantly maximizing hardware resource utilization."],
          tags: ["AWS", "IoT", "Cloud", "Vue.js"],
          link: "https://hackmd.io/@Beck049/BkeQuqv4R",
        },
        {
          title:["XZ-util report", "XZ-util report"], period:"2024/05~2024/06",
          content:["<b style='font-weight:900;font-size:1rem;'>- 靜態分析惡意後門：</b>使用 Ghidra 逆向分析 liblzma5.so，透過函式交叉引用與控制流程圖 (CFG)追蹤可疑邏輯，成功識別內部修改點，還原其影響 OpenSSH 認證的行為模式。",
                  "<b style='font-weight:900;font-size:1rem;'>- Static Analysis of a Malicious Backdoor: </b>Using Ghidra, I reverse-engineered liblzma5.so, traced suspicious logic via CFG and cross-references, and identified modifications affecting OpenSSH authentication."],
          tags: ["Cybersecurity", "Ghidra"],
          link: "https://hackmd.io/@Beck049/BkeQuqv4R",
        },
        {
          title:["NTNU_ADMS (大學申請系統)", "NTNU_ADMS (Admission System)"], period:"2022/09 ~ 2023/01",
          content:["<b style='font-weight:900;font-size:1rem;'>- 專案管理與流程優化：</b>帶領 20+ 人開發團隊，規劃開發流程與監督進度，確保專案在時程內完成，成功將研究所申請系統100% 電子化，減少紙本作業時間與人力成本。\n<b style='font-weight:900;font-size:1rem;'>- 全端開發與技術學習：</b>負責前後端開發，使用 TypeScript + Vue.js 建構元件化前端、Go + MongoDB 優化後端效能，並提升自身對 NoSQL 資料庫的理解與應用能力。\n<b style='font-weight:900;font-size:1rem;'>- 團隊培訓與技術支援：</b>除了開發與管理，還協助內部教學與技術指導，提高團隊開發效率 25%，促進組員快速適應新技術與架構，確保專案順利進行。",
                  "<b style='font-weight:900;font-size:1rem;'>- Project Management & Process Optimization:</b> Led a 20+ member team, overseeing development and ensuring timely completion. Successfully digitized 100% of the graduate application system, reducing paperwork and labor costs.\n<b style='font-weight:900;font-size:1rem;'>- Full-Stack Development & Technical Growth:</b> Developed both front and back end using TypeScript + Vue.js for a component-based frontend and Go + MongoDB to optimize backend performance, deepening expertise in NoSQL databases.\n<b style='font-weight:900;font-size:1rem;'>- Team Training & Technical Support:</b> Provided internal training and guidance, boosting team efficiency by 25% and accelerating adaptation to new technologies, ensuring smooth project execution."],
          tags: ["vue.ts", "Go", "MongoDB"],
          link: "https://hackmd.io/@Beck049/ByGbUWj2yl",
        },
        {
          title:["腦瘤 MRI 影像偵測", "Brain Tumor MRI Detection"], period:"2022/07~2023/06",
          content:["<b style='font-weight:900;font-size:1rem;'>- 腦瘤 MRI 影像分析與分割：</b>使用 CNN 與 instance segmentation 技術，自動辨識並標註腦瘤位置，模型達成 腫瘤檢測準確率 92%，顯著提升 MRI 影像診斷的自動化程度。\n<b style='font-weight:900;font-size:1rem;'>- 深度學習框架應用：</b>運用 MONAI 的 UNETR 進行影像標註，結合 PyTorch 訓練 CNN 模型，有效提升特徵提取能力。",
                  "<b style='font-weight:900;font-size:1rem;'>- Brain Tumor MRI Analysis & Segmentation:</b> Used CNN and instance segmentation to detect and annotate tumors, achieving 92% accuracy and enhancing MRI diagnosis automation.\n<b style='font-weight:900;font-size:1rem;'>- Deep Learning Framework Application:</b> Applied MONAI's UNETR for image annotation and trained CNN models with PyTorch to improve feature extraction."],
          tags: ["Pytorch", "CNN", "Machine Learning"],
          link: "https://hackmd.io/@Beck049/rJyWcWs2kg",
        },
        {
          title:["師大暑期資工營", "NTNU Summer Computer Science Camp"], period:"2021/11~2022/07",
          content:["<b style='font-weight:900;font-size:1rem;'>- 統籌與專案管理：</b>擔任總籌，負責規劃 100 人規模 的資工營隊，制定時程並監督各組進度，確保所有講座、實作課程與活動順利執行，活動滿意度達 90%。\n<b style='font-weight:900;font-size:1rem;'>- 跨組協調與廠商洽談：</b>與多個廠商接洽，確保場地、設備、物資準時到位，同時支援各組運作，讓團隊能專注於內容規劃與互動。\n<b style='font-weight:900;font-size:1rem;'>- 提升高中生對資工的認識：</b>透過精心設計的課程與活動，使參與學生對大學資工系的了解度提高 85%（根據活動後問卷統計），成功激發學生對資訊科學的興趣。",
                  "<b style='font-weight:900;font-size:1rem;'>- Leadership & Project Management:</b> Led a 100+ person computer science camp, planning schedules, overseeing progress, and ensuring smooth execution of lectures, workshops, and activities,achieving a 90% satisfaction rate\n<b style='font-weight:900;font-size:1rem;'>- Cross-Team Coordination & Vendor Negotiation:</b> Managed vendor communications to secure venues, equipment, and materials on time while supporting teams in content planning and engagement.\n<b style='font-weight:900;font-size:1rem;'>- Enhancing High School Students' CS Awareness:</b> Designed interactive courses and activities, increasing participants' understanding of CS programs by 85% (post-event survey), successfully sparking interest in computer science."],
          tags: ["Leadership", "Teamwork"],
          link: "https://hackmd.io/@Beck049/rJcIq-jn1g",
        },
      ],
      certificates: [
        { title: "Google Project Manager", link: "https://www.coursera.org/account/accomplishments/specialization/S7Q54PP7S5PR", img: "/icons/GooglePM.jpeg" },
        { title: "Google Cybersecurity", link: "https://www.coursera.org/account/accomplishments/specialization/J6QVZFU025GT", img: "/icons/GoogleCyber.jpeg" },
        { title: "Google UX Design", link: "https://www.coursera.org/account/accomplishments/specialization/ZSMQ4DER7QFS", img: "/icons/GoogleUX.jpeg" },
        { title: "AWS Academy Graduate - Machine Learning Foundations", link: "https://www.credly.com/badges/c279c32e-7dc7-4c1a-baee-96694334c287", img: "/icons/AWS-ML.png" },
        { title: "AWS Academy Graduate - Cloud Developing", link: "https://www.credly.com/badges/e010e9c5-c1f2-45e4-8d83-d157859e6c97", img: "/icons/AWS-Dev.png" },
        { title: "AWS Academy Graduate - Cloud Architecting", link: "https://www.credly.com/badges/e51c19af-3815-407a-a259-bd20d3d9ebfd", img: "/icons/AWS-Arch.png" },
        { title: "AWS Academy Graduate - Cloud Security", link: "https://www.credly.com/badges/d377cccd-5ad6-41d8-b3fd-4881b8173ba3", img: "/icons/AWS-Sec.png" },
        { title: "Google Cybersecurity Professional Certificate", link: "https://www.credly.com/badges/dd8c7973-2554-460d-b9f6-2d57723f74a4", img: "/icons/GoogleCyberCert.png" },
      ],
      others: [
        {
          title:"AI Cup - Medical SPII Detection", period:"2025/05~2025/06",
          content:["<b style='font-weight:900;font-size:1rem;'>- 模型微調：</b>對 Whisper 和 DeepSeek 進行語音辨識 (ASR) 與命名實體辨識 (NER) 的醫療語音資料微調。\n<b style='font-weight:900;font-size:1rem;'>- 高效訓練：</b>使用 AMP、LoRA 與 4-bit 量化，在 6GB GPU 上訓練模型。\n<b style='font-weight:900;font-size:1rem;'>- 資料準備：</b>開發 Mel spectrogram、分詞與音檔增強等資料處理模組。\n<b style='font-weight:900;font-size:1rem;'>- 資源優化：</b>透過調整 batch size、梯度累積與 checkpointing，在有限 GPU 記憶體下訓練大型模型。",
                  "<b style='font-weight:900;font-size:1rem;'>- Model Fine-tuning:</b> Fine-tuned Whisper and DeepSeek for ASR and NER on medical speech data.\n<b style='font-weight:900;font-size:1rem;'>- Efficient Training:</b> Used AMP, LoRA, and 4-bit quantization to train models on 6GB GPU.\n<b style='font-weight:900;font-size:1rem;'>- Data Preparation:</b> Built modules for mel spectrograms, tokenization, and audio augmentation.\n<b style='font-weight:900;font-size:1rem;'>- Resource Optimization:</b> Adjusted batch size, applied gradient accumulation and checkpointing to train large models on limited GPU memory."],
          tags: ["Pytorch", "Transformers", "Whisper"],
          link: "https://hackmd.io/@Beck049/Sygh77Lb7gl",
        },
        {
          title:"Next.js middleware bypass", period:"2025/04~2025/05",
          content:["- Researched a Next.js middleware bypass vulnerability by reproducing the exploit and studying mitigations, gaining practical insight into web security flaws and defensive strategies.",
                  "- Researched a Next.js middleware bypass vulnerability by reproducing the exploit and studying mitigations, gaining practical insight into web security flaws and defensive strategies."],
          tags: ["Cybersecurity", "Web"],
          link: "https://hackmd.io/@Beck049/H166W4Lpke",
        },
        {
          title:"PokemonRL", period:"2023/09~2023/12",
          content:["- Deepened the understanding of reinforcement learning by implementing Deep Q-Learning (DQN) and training an agent to optimize its actions in a complex environment like Pokémon Red.",
                  "- Deepened the understanding of reinforcement learning by implementing Deep Q-Learning (DQN) and training an agent to optimize its actions in a complex environment like Pokémon Red."],
          tags: ["Pyboy", "Stable Baselines 3", "Reinforce Learning"],
          link: "https://hackmd.io/@Beck049/SJ4jt-j2yg",
        },
        {
          title:"Normal Game Jam 2025",
          content:["- Participated in a Game Jam and developed a 2D rope parkour game using Godot, achieving second place in the competition.\n- Built upon last year's experience by focusing on improving the development workflow, leading to significant enhancements in game architecture design and collaborative development practices.",
                  "- Participated in a Game Jam and developed a 2D rope parkour game using Godot, achieving second place in the competition.\n- Built upon last year's experience by focusing on improving the development workflow, leading to significant enhancements in game architecture design and collaborative development practices."],
          tags: ["Godot"],
          link: "https://hackmd.io/@Beck049/SJrlI48xll",
        },
        {
          title:"Normal Game Jam 2024",
          content:["- Gained hands-on experience in using Godot to develop a 2D dungeon puzzle game, improving skills in game engine usage.\n- The tight development timeline taught me how to manage time effectively.",
                  "- Gained hands-on experience in using Godot to develop a 2D dungeon puzzle game, improving skills in game engine usage.\n- The tight development timeline taught me how to manage time effectively."],
          tags: ["Godot"],
          link: "https://hackmd.io/@Beck049/SkRbpirwA",
        },
        {
          title:"Google Foobar 2023",
          content:["- honed my ability to break down complex problems and design effective solutions within a limited time frame.\n- Improving the problem-solving skills and the ability to think critically under pressure.",
                  "- honed my ability to break down complex problems and design effective solutions within a limited time frame.\n- Improving the problem-solving skills and the ability to think critically under pressure."],
          tags: ["Python"],
          link: "https://hackmd.io/@Beck049/r1ji9Wjn1e",
        },
        {
          title:"SEEDLab",
          content:["- Through hands-on exercises like Buffer Overflow, SQL Injection, and ARP Spoofing, you gained practical experience in identifying and understanding common vulnerabilities and attack techniques.",
                  "- Through hands-on exercises like Buffer Overflow, SQL Injection, and ARP Spoofing, you gained practical experience in identifying and understanding common vulnerabilities and attack techniques."],
          tags: ["Cybersecurity"],
          link: "https://hackmd.io/@Beck049/B12vKZi3ke",
        },
        {
          title:"XV6",
          content:["- Deepened the understanding of critical OS mechanisms, such as system calls, process management, memory management, and file systems, by implementing them within the xv6 kernel.\n- Gained hands-on experience modifying and expanding the xv6 kernel.",
                  "- Deepened the understanding of critical OS mechanisms, such as system calls, process management, memory management, and file systems, by implementing them within the xv6 kernel.\n- Gained hands-on experience modifying and expanding the xv6 kernel."],
          tags: ["Operating System"],
          link: "https://hackmd.io/@Beck049/HyssOKkZR",
        },
      ],
    };
  },
  methods: {
    handleScrolldown() {
      const currentScrollPosition = window.scrollY;
      this.isHidden = currentScrollPosition > this.lastPosition && currentScrollPosition > 50;
      this.positionY = this.isHidden? currentScrollPosition -70: currentScrollPosition;
      this.lastPosition = currentScrollPosition;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrolldown);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScrolldown);
  }
};
</script>

<style scoped>
/* Base Layout */
.text-color{
  color: var(--content-color);
}
.profile-page {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background: var(--bg-color-1);
}

.floating-card {
  position: sticky;
  flex-direction: column;
  transition: top 0.3s ease-out;
}

/* Content Section */
.profile-content {
  flex: 2 1 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--content-color);
  border: 1px solid var(--gray-text);
  border-radius: 20px;
  padding: 28px 32px;
}

@media (max-width: 1000px) {
  .profile-page {
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
  }

  .floating-card {
    position: static; /* Remove sticky positioning */
    width: fit-content; /* Make it fit its content */
    margin: 0 auto; /* Center it horizontally */
  }

  .profile-content {
    width: 100%;
    padding: 28px 32px;
  }
}

.section {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.section h2 {
  color: var(--gray-text);
  margin-bottom: 5px;
}
.section h2 .hash{
  color: var(--tertiary);
  display: inline;
}

.border-style {
  border: 1px solid var(--gray-text);
}

.image-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.enableENDL {
  white-space: pre-line;
  padding: 0px 10px;
}
.tag-group {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding: 10px;
}

/* Content Display */
.about {
  color: var(--content-color);
  padding: 12px;
}
  /* Education */
.education-group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
}
.education {
  display: flex;
  flex-direction: row;
}
.education-content {
  display: flex;
  flex-direction: column;
  color: var(--gray-text);
  font-size: 0.8rem;
  min-width: 12rem;
  padding: 0px 10px;
}
.education-content i {
  display: inline;
  margin-top: -5px;
}
.education-content i:first-child {
  font-size: 1.2rem;
}
  /* Experience */
.experience {
  width:100%;
}
.experience-head {
  display: flex;
  flex-direction: row;
  max-height: fit-content;
}
.experience-data {
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
}
.experience-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--gray-text);
  font-size: 0.8rem;
}
.experience-title i:first-child{
  font-size: 1.2rem;
}
.experience-content{
  color: var(--content-color);
}
  
/* Skill */
.skill-group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.skill {
  box-sizing: border-box;
  text-align: center;
  padding: 5px;
}
.skill div:first-child {
  color: var(--gray-text);
  font-weight: bold;
}
.skill div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:5px;
}
.skill-list{
  color: var(--content-color);
}
  /* Project */
.project {
  width:100%;
}
.project-head {
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
}
.project-content{
  color: var(--content-color);
}
.project-title {
  color: var(--gray-text);
  font-size: 1.2rem;
}
/* Certificate */
.certificate-group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.certificate {
  width: calc(33.333% - 15px); /* 每行最多 3 個*/
  box-sizing: border-box;
  text-align: center;
}
.certificate div a {
  text-decoration: underline;
  font-weight: 800;
  color: var(--accent-1);
}
.certificate div img {
  max-height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
/* Other */
.other {
  width:100%;
}
.other-title {
  color: var(--gray-text);
  font-size: 1.2rem;
}
</style>
