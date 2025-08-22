import type { Service } from "@/lib/service-data";

const svc: Service = {
    slug: "display-advertising",
    title: "Display Advertising",
    description:
        "Get your best content in front of real buyers across the right channels.",
    ogImage: "/services/contentsynd.png", 
    sections: [
        {
            type: "hero",
            heading: "Multichannel Targeting for Building Awareness and Cultivating Mindshare",
            body: "With our innovative approach, you can effectively reach a wide audience using our digital advertising strategy. By targeting specific buying collectives, our programmatic display ads ensure direct access to potential customers. We offer multi-platform availability, partnering with top-tier publishers to deliver your ads on popular platforms like Google, LinkedIn, and Facebook. These ads can be seamlessly integrated into various third-party seller websites, enabling your brand to be showcased in the spaces where your company analytics have been well-practiced.",
            image: "/services/contentsynd.png",
        },
        {
            type: "text",
            heading: "End-to-End Programmatic Solutions for Seamless Multi-Platform Delivery",
            body: "Our comprehensive services provide end-to-end turnkey solutions, ensuring smooth ad delivery across multiple platforms. By leveraging our expertise, you can effortlessly connect with your target audience, enhance brand visibility, and drive conversions. Trust Acumen Intelligence to elevate your advertising efforts and achieve exceptional results in today’s dynamic digital landscape.",
            align: "right",
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
            cta: { label: "Get started today", href: "/contact" } 
        }
    ],
};

export default svc;
