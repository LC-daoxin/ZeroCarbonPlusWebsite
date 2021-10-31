
<template>
  <base-section
    id="Podcast"
    color="#f5f7fd"
    space="50"
  >
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="9"
        >
          <podcasts-card
            v-for="(podcast, i) in showList"
            :key="i"
            :divider="i + 1 < showList.length"
            class="mb-5"
            v-bind="podcast"
            @play="audioPlay"
          />
          <div class="text-center">
            <v-pagination
              v-model="pagination.current"
              :length="pagelength"
              @input="changePage"
            />
          </div>
          <podcast-audio
            ref="audio"
            :podcast-list="showList"
          />
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <introduce />

          <team />

          <classification />

          <links />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionPodcastAlt',

    components: {
      Classification: () => import('@/components/podcasts/Classification'),
      PodcastsCard: () => import('@/components/podcasts/Card'),
      Team: () => import('@/components/podcasts/Team'),
      Introduce: () => import('@/components/podcasts/Introduce'),
      Links: () => import('@/components/podcasts/Links'),
      PodcastAudio: () => import('@/components/podcasts/Audio'),
    },

    data: () => ({
      pagination: {
        total: 16,
        current: 1,
        pageSize: 9,
      },
      showList: [],
      podcastList: [
        {
          id: 16,
          date: '2021-10-31',
          icon: 'mdi-play',
          howl: null,
          anchorName1: 'Jasper Zhang',
          anchorName2: '张浩然',
          anchorImg: require('@/assets/users/user-haoran.png'),
          guest: '王怡婷',
          title1:
            'Hello COP26! Let’s TalC about the divestment from fossil fuels and electricity shortage',
          title2: '走近联合国气候大会：煤炭撤资与短期电荒',
          text1:
            "Who has held back climate negotiations? Will the current global energy crisis hinder the divestment of fossil fuels? What does China's pledge mean on ceasing the funding to overseas coal projects?",
          text2:
            '导读：历史上看，气候谈判都被谁拖过后腿？当前全球电荒是否会对化石能源的撤资运动带来反作用力？中国刚刚承诺不再增加新的海外化石能源投资？这意味着什么？',
          src: require('@/assets/podcasts/wyt.jpg'),
          contain: true,
          audio:
            'https://aod.cos.tx.xmcdn.com/storages/125d-audiofreehighqps/B9/94/CKwRIJEFUzREAMmoiADyE8j_.m4a',
          podcastType: 1,
          to: 'https://www.ximalaya.com/toutiao/54147385/467443444',
          previewNum: 426,
        },
        {
          id: 15,
          date: '2021-10-28',
          icon: 'mdi-play',
          howl: null,
          anchorName1: 'Jasper Zhang',
          anchorName2: '张浩然',
          anchorImg: require('@/assets/users/user-haoran.png'),
          guest: '李奕潼',
          title1:
            'Hello COP26! Let’s TalC about how young people fight for themselves',
          title2: '走近联合国气候大会：青年斗争的最新进展',
          text1:
            'Do you know what is the UN Climate Change Conference of Youth (COY) and the relationship between COY16 and COP26? Why did COY16 refuse to accept a funding of 100,000 US dollars? How did youth delegates fight for the rights of youth with the president of COP26, and finally succeed?',
          text2:
            '导读：格拉斯哥青年气候大会今日开幕，作为联合国的官方青年会议，这些年轻人要在为期四天的磋商中达成哪些共识？将如何影响后续的政府谈判？作为中国协调员，本期嘉宾为会议筹集到十万美金资助，却为何遭到激进派抵制？最终毁约放弃金主？青年代表如何与第26届联合国气候大会主席反复争取青年权益，最终拿到主要议程主导权？',
          src: require('@/assets/podcasts/cathy.jpg'),
          contain: true,
          audio:
            'https://aod.cos.tx.xmcdn.com/storages/95ea-audiofreehighqps/93/38/CKwRIMAFTheEAFQL5QDwtd_8.m4a',
          podcastType: 1,
          to: 'https://www.ximalaya.com/toutiao/54147385/466165439',
          previewNum: 488,
        },
        {
          id: 14,
          date: '2021-10-27',
          icon: 'mdi-play',
          howl: null,
          anchorName1: 'Jasper Zhang',
          anchorName2: '张浩然',
          anchorImg: require('@/assets/users/user-haoran.png'),
          guest: '陈婧嫣',
          title1: 'Hello COP26! Let’s TalC about the history and China’s role',
          title2: '走近联合国气候大会：历史梳理与中国角色',
          text1:
            "Do you know what is a climate negotiation and who are the participants? After nearly 30 years of long negotiations, have politicians achieved any effective results? What is China's role in it? Positive or conservative?",
          text2:
            '导读：气候变化这种环境议题为什么还可以谈判？有多少个国家参与？都在谈些什么？各国在气候议题上的争论有没有一些作秀的成分？当可持续与经济相冲突时，怎样才能让国家行为体持有一种富有雄心的，去减缓和适应气候变化，以及比如说推动清洁能源转型，这样的政治意愿？中国在其中的角色是什么？从最开始的偏保守到目前更积极的姿态，是什么促使了这一转变的发生？人们讲中国的气候行动更脚踏实地，中国的气候承诺言出必行，有学者表示这是因为气候议题已经成为中国的内生需求。为何会有这种判断？',
          src: require('@/assets/podcasts/cjy.jpg'),
          contain: true,
          audio:
            'https://aod.cos.tx.xmcdn.com/storages/c67d-audiofreehighqps/7D/CE/CKwRIRwFTgb1AMgohwDwtPMP.m4a',
          podcastType: 1,
          to: 'https://www.ximalaya.com/toutiao/54147385/466161936',
          previewNum: 531,
        },
        {
          id: 13,
          date: '2021-10-26',
          icon: 'mdi-play',
          howl: null,
          anchorName1: 'Jasper Zhang',
          anchorName2: '张浩然',
          anchorImg: require('@/assets/users/user-haoran.png'),
          guest: '张佳萱',
          title1: 'From Milan to Glasgow',
          title2: '回顾米兰展望格拉斯哥',
          text1:
            "What's the relationship between Pre-COP and COP? A comprehensive ban on fossil fuels by 2025? A fan-meeting at a conference hall? How do young people make their voice heard in international climate negotiations? Come and join Jiaxuan for a conversation to bridge Milan and Glasgow.",
          text2:
            '导读：米兰会议和格拉斯哥大会有什么联系？ 2025年全面禁止化石能源？青年谈判成粉丝见面大会？国际气候谈判需要怎样的青年声音？一起来听佳萱回顾米兰青年气候峰会、展望格拉斯哥。',
          src: require('@/assets/podcasts/zjx.jpg'),
          contain: true,
          audio: '',
          podcastType: 1,
          to: '',
          previewNum: 675,
        },
        {
          id: 12,
          date: '2021-10-25',
          icon: 'mdi-play',
          howl: null,
          anchorName1: 'BAO Rong',
          anchorName2: '包瑢',
          anchorImg: require('@/assets/users/user-baorong.jpg'),
          guest: '佳萱',
          title1: "Unveil what's going on at COP",
          title2: '气候谈判的众生相',
          text1:
            'How did Katowice host COP24? What did Chinese youth delegates do at an international negotiation conference room? Countries were awarded with their "worst performance"? Join Zongqi and Yawen to restore the scene of UN climate change conferences.',
          text2:
            '导读：波兰卡托维茨如何迎接COP24？中国青年代表团在谈判会场做什么？表现最差的国家还能拿奖？来听宗琪、雅雯带你还原联合国气候谈判众生相。',
          src: require('@/assets/podcasts/12第十二期.jpg'),
          audio:
            'https://aod.cos.tx.xmcdn.com/storages/2879-audiofreehighqps/21/75/CKwRIW4FS62FANw9gQDwBxHA.m4a',
          podcastType: 1,
          to: 'https://www.ximalaya.com/toutiao/54147385/465515237',
          previewNum: 713,
        },
        {
          id: 11,
          date: '2021-10-09',
          icon: 'mdi-play',
          howl: null,
          anchorName1: 'Jasper Zhang',
          anchorName2: '张浩然',
          anchorImg: require('@/assets/users/user-haoran.png'),
          guest: 'Cici',
          title1:
            'Job-hunting Season | What kind of talent are multilateral banks recruiting?',
          title2: '秋招季 | 多边银行在招什么样的可爱人才',
          text1:
            "Cici has long been involved in the international development industry, serving as an economic advisor to development financial institutions and participating in a range of infrastructure projects aimed at sustainable development. In this episode, she will share her experience working in multilateral banks.What's the history of NGOs? From non-governmental organizations to multilateral banks, what has changed regarding the content of work? What are the green job opportunities in economics and finance?Career pathways for sustainable development-related positions - Are you excited in the face of the unknown?Why choose to return to China for your career? The social impact of jobs in developing regions may be even higher.",
          text2:
            '导读：Cici长期从事国际发展行业，担任开发性金融机构的经济顾问，曾参与一系列可持续发展为目标的基建项目。在本期节目中，她将分享在多边银行工作的经历。非政府组织的渊源何在？从非政府组织到多边银行，工作内容有何变化？经济金融领域的绿色岗位机会有哪些？可持续发展相关岗位的职业发展路径——面对未知，你是否感到神奇与兴奋？为何回国发展？如何选择就业地域？——发展中地区的职位的社会影响或许会更高。',
          src: require('@/assets/podcasts/11第十一期.jpg'),
          audio:
            'https://aod.cos.tx.xmcdn.com/storages/a536-audiofreehighqps/D3/B6/CKwRIasFN3w7APWRvwDrCEpI.m4a',
          podcastType: 2,
          to: 'https://www.ximalaya.com/gerenchengzhang/52797354/460832420',
          previewNum: 875,
        },
        {
          id: 10,
          date: '2021-10-07',
          icon: 'mdi-play',
          howl: null,
          anchorName1: 'Jasper Zhang',
          anchorName2: '张浩然',
          anchorImg: require('@/assets/users/user-haoran.png'),
          guest: '徐征',
          title1: 'Job-hunting Season | How about working for a consulting firm?',
          title2: '秋招季 | 去咨询公司上班怎么样？',
          text1:
            'Xu has been involved in discussions and progress tracking on climate change negotiations since 2014. He used to study at the Oxford Energy Research Institute and the European Policy Research Centre. Xu will share with us his experience working for an energy consulting firm in this episode.What kind of positions are related to the sustainability in consulting?Take power consulting as an example, what are the specific business sections?What are the challenges faced by new graduates? How do we adapt to the changes from college to the workplace?What do you get from studying in Europe?',
          text2:
            '导读：徐征于2014年开始参与气候变化谈判的讨论与追踪，并先后在牛津能源研究院及欧洲政策研究中心访学并参与研究。本期他将与我们分享在能源咨询公司工作的经历。咨询行业在与可持续相关的岗位有哪些？以电力咨询为例，业务版块有哪些？初入职场的毕业生面临哪些挑战？如何完成从学生思维到职场思维的转变？留学欧洲有何收获？',
          src: require('@/assets/podcasts/10第十期.jpg'),
          audio:
            'https://aod.cos.tx.xmcdn.com/storages/56f5-audiofreehighqps/6E/C2/CKwRINsFNGYaARUjqgDqO9fd.m4a',
          podcastType: 2,
          to: 'https://www.ximalaya.com/gerenchengzhang/52797354/460062837',
          previewNum: 902,
        },
        {
          id: 9,
          date: '2021-09-22',
          icon: 'mdi-play',
          howl: null,
          anchorName1: 'Jasper Zhang',
          anchorName2: '张浩然',
          anchorImg: require('@/assets/users/user-haoran.png'),
          guest: '刘明初',
          title1:
            'Job-hunting Season | How do you find a European job opportunity with a healthy work-life balance?',
          title2: '秋招季 | 无996的欧洲工作是咋找到的？',
          text1:
            'These majors are compatible for energy sector employment! Timeline for job hunting in Europe? Interview tips for job hunting in Europe? How do you plan your career development as a green hand? What does a healthy work environment look like? How do you obtain a permanent contract?',
          text2:
            '导读：这些专业都能进入能源行业! 欧洲求职历程? 欧洲就业市场的面试技巧？初入职场，如何规划职场发展路径？好轻松的工作氛围！如何获得永久合同？',
          src: require('@/assets/podcasts/9第九期.jpg'),
          audio:
            'https://aod.cos.tx.xmcdn.com/storages/2fad-audiofreehighqps/72/2A/CKwRIJEFHVu_ASQIMADkuhYJ.m4a',
          podcastType: 2,
          to: 'https://www.ximalaya.com/gerenchengzhang/52797354/455072418',
          previewNum: 961,
        },
        {
          id: 8,
          date: '2021-09-19',
          icon: 'mdi-play',
          howl: null,
          anchorName1: 'Jasper Zhang',
          anchorName2: '张浩然',
          anchorImg: require('@/assets/users/user-haoran.png'),
          guest: '蒋玥',
          title1:
            'Job-hunting Season | How does it feel to work in government sector in DC?',
          title2: '秋招季 | 华盛顿特区政府部门的工作，如何？',
          text1:
            'What is it really like to work in the government sector in Washington DC? How is working in the public sector different from that in NGO? What challenges do non-native English speakers face in an English-speaking work environment? In this episode, we invited Yue Jiang, a former intern at the Department of Energy and Environment in Washington DC, to share with us her experience',
          text2:
            '导读：华盛顿特区政府部门的工作到底是什么样的？在公共部门工作与在非政府机构工作有何不同？非英语母语者，在英语工作环境中又会遇到哪些挑战？本期节目我们邀请到曾在华盛顿特区能源与环境部实习蒋玥和大家一一道来。',
          src: require('@/assets/podcasts/8第八期.jpg'),
          audio:
            'https://aod.cos.tx.xmcdn.com/storages/2213-audiofreehighqps/69/E1/CKwRIRwFHQKNASROSwDkqWW0.m4a',
          podcastType: 2,
          to: 'https://www.ximalaya.com/gerenchengzhang/52797354/455013605',
          previewNum: 1023,
        },
        {
          id: 7,
          date: '2021-09-18',
          icon: 'mdi-play',
          howl: null,
          anchorName1: 'Jasper Zhang',
          anchorName2: '张浩然',
          anchorImg: require('@/assets/users/user-haoran.png'),
          guest: '赵家鑫',
          title1: 'Job-hunting Season | Career Planning of a Rhodes Scholar',
          title2: '秋招季 | 听罗德学者讲述职业规划',
          text1:
            'In which professional fields can students of environment-related majors pursue a career? How should young people choose their first job? In this episode, we invited Jiaxin Zhao, Rhodes Scholar, to share with us about career planning.',
          text2:
            '导读：绿色相关专业，可以在哪些领域就业？青年人又该如何选择第一份工作？本期节目我们邀请了罗德学者赵家鑫和大家分享职业规划。',
          src: require('@/assets/podcasts/7第七期.jpg'),
          audio:
            'https://aod.cos.tx.xmcdn.com/storages/2213-audiofreehighqps/69/E1/CKwRIRwFHQKNASROSwDkqWW0.m4a',
          podcastType: 2,
          to: 'https://www.ximalaya.com/gerenchengzhang/52797354/454524599',
          previewNum: 1137,
        },
        {
          id: 6,
          date: '2021-09-13',
          icon: 'mdi-play',
          howl: null,
          anchorName1: 'Jasper Zhang',
          anchorName2: '张浩然',
          anchorImg: require('@/assets/users/user-haoran.png'),
          guest: '刘奕淳',
          title1:
            "Let's talk about dressing! Are we defining clothes or clothes defining us?",
          title2: '穿！我们定义衣服还是它定义我们？',
          text1:
            "Today we have Yichun Liu as our guest who is a fashion designer focusing on sustainable fashion. Join in the fashion journey with Liu and see what the fashion means to the environment.Who defines fashion? Who is trying to promote the fashion industry towards a sustainable model? Who should focus on this issue? And what is the relationship between sustainable fashion and me? What exactly are we buying for when shopping? Quality, design, material, happiness, personality, special sentiment or lifestyle? In fact, shopping can affect climate change, pollution, the use of pesticides and the emission of harmful gases. But now, we get the chance to change! Let's find the answer in this episode!",
          text2:
            '导读：刘奕淳, 青年服装设计师，致力于可持续时尚文化传播和概念落地. 谁在定义时尚？谁在推动时尚产业向可持续模式转变？谁要关注这个？和我有啥关系？请思考：我们买衣服是在买什么？品质 款式 面料 快乐 个性 情感 搭配 品味 仪式 劳动 灵感 生活 我们的购买也在促进气候变化，以及污染、农药使用、有毒废料排放... 现在，我们有机会扭转这一切。',
          src: require('@/assets/podcasts/6第六期.jpg'),
          audio:
            'https://aod.cos.tx.xmcdn.com/storages/f504-audiofreehighqps/7F/48/CKwRIRwFFQdJAQNrqwDis4zC.m4a',
          podcastType: 3,
          to: 'https://www.ximalaya.com/shishang/52796115/453170771',
          previewNum: 1203,
        },
        {
          id: 5,
          date: '2021-09-06',
          icon: 'mdi-play',
          howl: null,
          anchorName1: 'yuhua（Post-Production: BAO Rong, Leo Lin）',
          anchorName2: '毓华（后期：包瑢、林深楚）',
          anchorImg: require('@/assets/users/user-89.png'),
          guest: '白水、高翔、蒋凡',
          title1:
            'Food, organic and ecology! How do we define the relationship between food and us?',
          title2: '吃！我们与食物的关系将走向何方？',
          text1:
            'What is organic food? What is organic farming? Can they really contribute to ecological conservation? Why do some people choose organic farming as their lifetime career? Where is the relationship between humans and food going in the future?',
          text2:
            '导读：什么是有机食品？什么是有机农业？它真得有助于生态保护吗？为什么有人选择从事有机农业？有人推广有机食品？人类与食品的关系在未来会走向何方？',
          src: require('@/assets/podcasts/5第五期.jpg'),
          audio:
            'https://aod.cos.tx.xmcdn.com/storages/a854-audiofreehighqps/5A/CE/CKwRIMAFCvziAeh9mQDgLLbQ.m4a',
          podcastType: 3,
          to: 'https://www.ximalaya.com/shishang/52796115/450840125',
          previewNum: 1251,
        },
        {
          id: 4,
          date: '2021-05-30',
          icon: 'mdi-play',
          howl: null,
          anchorName1: 'BAO Rong',
          anchorName2: '包瑢',
          anchorImg: require('@/assets/users/user-baorong.jpg'),
          guest: 'Thomas Smith',
          title1:
            'What are we breathing? Air pollution, wildfire, and climate change',
          title2: '我们在呼吸什么？空气污染、森林大火和气候变化',
          text1:
            'What is air pollution and where does it come from? How do climate-change-induced wildfires exacerbate air pollution? How have air quality and wildfire changed during the pandemic? Tune in and join Dr. Thomas Smith from the London School of Economics to demystify what we are breathing.',
          text2:
            '导读：空气污染来源于哪儿？气候变化引发的森林大火如何加剧空气污染？新冠疫情期间空气质量和山火数量有何变化？来听伦敦政经学院Thomas Smith博士剖析我们到底在呼吸什么。',
          src: require('@/assets/podcasts/4第四期.jpg'),
          audio:
            'https://aod.cos.tx.xmcdn.com/storages/9938-audiofreehighqps/2E/83/CKwRIUEEiU42AaKBlwCyo8li.m4a',
          podcastType: 4,
          to: 'https://www.ximalaya.com/keji/45880448/420141407',
          previewNum: 1304,
        },
        {
          id: 3,
          date: '2021-04-17',
          icon: 'mdi-play',
          howl: null,
          anchorName1: 'LOU yushan',
          anchorName2: '楼昱杉',
          anchorImg: require('@/assets/users/user-yushan.jpg'),
          guest: '何继江',
          title1:
            "The four key choices in the process of China's energy transition in terms of electricity, transportation, heating and industry",
          title2: '【能源转型过程的四个关键选择】  电力、交通、供热、工业',
          text1:
            "In this episode, our host Yushan Lou invited Dr Jijiang He, Deputy Director of the Research Center for Energy Transition and Social Development at Tsinghua University, to discuss youth opportunities in China's energy transition.Interested in energy topics? Wondering what do people do in energy sector?Although you don't work in energy industry, is the new situation 'forcing' you to focus on energy transition? Why do we need energy transition? What kind of jobs does energy transition create? And what social challenges does it come across? Who should keep an eye on the latest news of energy transition?",
          text2:
            '导读：在本期「大声谈 弹走碳碳碳」节目中，主持人楼昱杉对话清华大学能源转型与社会发展研究中心常务副主任 何继江 博士，共同探讨愈发清晰的中国能源转型路线图中蕴藏着哪些青年机会。对能源议题感兴趣？但又不清楚这个领域都在做什么？不在能源行业工作，可是新形势正"逼着"你关注能源转型？我们为何要能源转型？能源转型创造了哪些就业机会？又面临哪些社会挑战？谁需要特别关注能源转型动态？',
          src: require('@/assets/podcasts/3第三期.jpg'),
          audio:
            'https://aod.cos.tx.xmcdn.com/storages/4a1f-audiofreehighqps/4D/8B/CKwRIUEET9PvAUw0-QCff5zw.m4a',
          podcastType: 4,
          to: 'https://www.ximalaya.com/keji/45880448/406405979',
          previewNum: 1321,
        },
        {
          id: 2,
          date: '2021-04-03',
          icon: 'mdi-play',
          howl: null,
          anchorName1: 'Leo Lin',
          anchorName2: '林深楚',
          anchorImg: require('@/assets/users/user-shenchu.jpg'),
          guest: '罗昀、卢之遥、张佳萱',
          title1: '"Her" power in fighting against climate change',
          title2: '【她】力量与带给我的惊喜',
          text1:
            'According to research, women tend to be more concerned about environmental issues, Her power is more and more important in fighting against climate change. Our three speakers will share their career experience and zero carbon action from different angles, vary from renewable energy startup, to NGO and to think tank.',
          text2:
            '导读：据研究女性往往更关注环境议题，在对抗气候变化的过程中，我们看到越来越多的女性身影。三位嘉宾分别从新能源企业、环保基金会和高校智库的角度分享她们的职场故事和零碳行动。',
          src: require('@/assets/podcasts/2第二期.jpg'),
          audio:
            'https://aod.cos.tx.xmcdn.com/storages/d038-audiofreehighqps/A6/12/CKwRIJEEPk8zATBRGQCaQzHF.m4a',
          podcastType: 4,
          to: 'https://www.ximalaya.com/keji/45880448/402009242',
          previewNum: 1378,
        },
        {
          id: 1,
          date: '2021-03-20',
          icon: 'mdi-play',
          howl: null,
          anchorName1: 'YU Zongqi',
          anchorName2: '于宗琪',
          anchorImg: require('@/assets/users/user-zongqi.jpg'),
          guest: '姚松乔',
          title1:
            'Echoes from the South Pole: a conversation with Songqiao Yao, a polar region adventurer,  to learn about the harmony between humanity and the nature',
          title2:
            '聆听最南端的回声：对话极地探险家姚松乔，寻找人与自然的共生之道',
          text1:
            'Our guest, Songqiao Yao, has rich experience in tackling climate change and ecosystem conservation. She will guide us to learn more about Antarctica based on her 16 expeditions to the Antarctic Peninsula. How many steps do we need for an Antarctic expedition? How should humans and nature interact in a harmonious way? Who can contribute to climate change mitigation?',
          text2:
            '导读：我们邀请到在应对气候变化和生态保护领域拥有丰富经验的姚松乔女士作为本期嘉宾，她将结合十六次到访南极半岛的亲身经历，带领大家走近南极。前往南极探险，要分几步准备？人与自然应该如何友好互动？谁能为气候减缓贡献力量？',
          src: require('@/assets/podcasts/1第一期.jpg'),
          audio:
            'https://aod.cos.tx.xmcdn.com/storages/bfec-audiofreehighqps/54/F2/CKwRIDoEKph4AT3UvACUbQMb.m4a',
          podcastType: 4,
          to: 'https://www.ximalaya.com/keji/45880448/396907368',
          previewNum: 1251,
        },
      ],
    }),
    computed: {
      pagelength() {
        const { total, pageSize } = this.pagination
        return Math.ceil(total / pageSize)
      },
    },
    created() {
      this.changePage(1)
    },
    methods: {
      audioPlay(id) {
        this.$refs.audio.play(id)
      },
      changePage(num) {
        const { pageSize } = this.pagination
        this.pagination.current = num
        const first = (num - 1) * pageSize
        this.showList = this.podcastList.slice(first, first + pageSize)
      },
    },
  }
</script>
