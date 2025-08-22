import type { Service } from "@/lib/service-data";

const svc: Service = {
    slug: "content-syndication",
    title: "Content Syndication",
    description:
        "Get your best content in front of real buyers across the right channels.",
    ogImage: "/services/contentsynd.png", 
    sections: [
        {
        type: "hero",
        heading: "Providing Buyer Content That Is Relevant to the Market",
        body:
            "Through strategic partnerships and extensive distribution networks, we ensure that your valuable content reaches the right people at the right time. Our expert team works closely with you to create compelling buyer-focused content that resonates with your target market, capturing their attention and driving meaningful engagement.\n\nBy leveraging our content syndication services, you can establish your brand as a thought leader, generate high-quality leads, and nurture customer relationships.",
        image: "/services/contentsynd.png",
        },
        {
        type: "cards",
        heading: "How we help",
        items: [
            {
            title: "Live your B2B journey, now digitally",
            body:
                "Digitized campaigns have no end-path—we put your content first and convert it into a clear message. Whether buyers seek products or specific software, we map the full journey.",
            },
            {
            title: "Boost your exposure to all B2B portals",
            body:
                "Friendly syndication speeds visibility and keeps content fully indexed on relevant portals. Reach the right accounts with explicit campaigns and partner programs.",
            },
            {
            title: "Expand the exposure from concept to conversion",
            body:
                "From articles and white papers to video and social—we turn content into a concept and take it where you always wanted it to go.",
            },
        ],
        },
        {
        type: "text",
        heading: "Multi‑Channel Content Syndication",
        body:
            "Even if you’re already utilizing content syndication, we can almost certainly give additional leads at a comparable (or better) CPL. And we’ll take care of everything.",
        image: "/services/contentsynd2.png",
        align: "right",
        cta: { label: "Get started today", href: "/contact" } // 👈 button inside the section
        }
    ],
};

export default svc;
