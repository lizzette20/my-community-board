import React from "react";
import Card from "./Card"; 

const events = [
  { title: "Design Your Future: UX/UI Careers 101", description: "Free networking event for aspiring designers.", link: "https://designlab.com/get-started?utm_term=user%20experience%20ux%20design&utm_campaign=Generic+Keywords+Phrase+Match&utm_source=adwords&utm_medium=ppc&hsa_acc=3032777367&hsa_cam=14670841433&hsa_grp=127710890336&hsa_ad=689453895251&hsa_src=g&hsa_tgt=kwd-324992738311&hsa_kw=user%20experience%20ux%20design&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiA2oW-BhC2ARIsADSIAWoqBHl4YNrvJSH4HTtQadIrMVrodN38GOtHZzFMAoSktYHMqFWCTDEaApKlEALw_wcB", image: "/images/uxui.jpeg"},
  { title: "How to Make It in Fashion", description: "A panel with top fashion industry pros.", link: "https://www.voguebusiness.com/", image: "/images/fashion.jpeg"},
  { title: "Breaking Into the Gaming Industry", description: "Meet game developers & esports recruiters.", link: "https://www.nuclino.com/articles/game-development",image: "/images/gaming.jpeg" },
  { title: "From Side Hustle to Startup", description: "A free session on launching your own business.", link: "https://www.builtinnyc.com/", image: "/images/Entrepreneur.jpeg"},
  { title: "Monetize Your Creativity: YouTube & TikTok Workshop", description: "Learn how to turn content into a career.", link: "https://www.thinkific.com/blog/content-creator/", image: "/images/contentcreator.jpeg"},
  { title: "Podcasting 101: How to Start & Grow Your Show", description: "A live Q&A with podcast hosts.", link: "https://riverside.fm/home?campaign_id=21887842276&ad_id=720242388897&utm_term=remote%20podcast%20recording&utm_campaign=US_B2C_Broad_Desktop&utm_source=google&utm_medium=cpc&utm_content=Generic_Podcast_Recording_Remote&hsa_acc=4755094241&hsa_cam=21887842276&hsa_grp=169681777389&hsa_ad=720242388897&hsa_src=g&hsa_tgt=kwd-300323220205&hsa_kw=remote%20podcast%20recording&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiA2oW-BhC2ARIsADSIAWri_KyIoJg6m2miXjx6N__Uh62MDMNGRSG-uEKxGor645jYk3bCmmEaAnLOEALw_wcB", image: "/images/Podcast.jpeg"},
  { title: "Broadway & Beyond: Careers in Entertainment", description: "Meet industry professionals.", link: "https://careers.broadway/", image: "/images/broadway.jpeg"},
  { title: "Social Media Manager Bootcamp", description: "Learn how to get paid to manage brands.", link: "https://www.coursera.org/learn/social-media-management/paidmedia?utm_medium=sem&utm_source=gg&utm_campaign=b2c_namer_facebook-social-media-marketing_meta_ftcof_professional-certificates_px_dr_bau_gg_sem_pr-bd_us-ca_en_m_hyb_20-10_x&campaignid=11287551113&adgroupid=113967359695&device=c&keyword=&matchtype=&network=g&devicemodel=&creativeid=647611246730&assetgroupid=&targetid=dsa-2382188716463&extensionid=&placement=&gad_source=1&gclid=Cj0KCQiA2oW-BhC2ARIsADSIAWr4IXcxhULxBtgioRSn4Fzc9ntO94bW-JF8IiqOxIurqvQrWf1SM6saAuldEALw_wcB", image: "/images/Socialmediamanager.jpeg"},
  { title: "Freelancers Toolkit: Get Paid for Your Skills", description: "A networking event for creatives.", link: "https://www.upwork.com/", image: "/images/Freelancer.jpeg"},
  { title: "True Crime Writing: Breaking Into the Industry", description: "Learn from real crime authors.", link: "https://www.writersdigest.com/write-better-nonfiction/researching-and-writing-true-crime", image: "/images/truecrime.jpeg"},
];

const CommunityBoard = () => {
  return (
    <div className="board">
      {events.map((event, index) => (
        <Card key={index} title={event.title} description={event.description} link={event.link} image={event.image}/>
      ))}
    </div>
  );
};

export default CommunityBoard;
