import type { Service } from "@/lib/service-data";

const svc: Service = {
    slug: "lead-generation",
    title: "Lead Generation",
    description:
        "Get your best content in front of real buyers across the right channels.",
    ogImage: "/services/leadgen.png", 
    sections: [
        {
            type: "hero",
            heading: "Accelerate Business Growth with Lead Generation",
            body: "Our cutting-edge lead generation strategies harness the power of advanced data analytics, targeted marketing campaigns, and lead scoring techniques to identify and engage with your ideal prospects. With our expert team and comprehensive approach, we ensure that every lead we generate is highly qualified, empowering your sales team to convert them into loyal customers. Experience the power of our lead generation services and take your business to new heights.",
            image: "/services/leadgen.png",
        },
        {
            type: "text",
            heading: "Drive More Revenue With Intelligence HQL/BANT",
            body: "Our primary goal is to generate leads that are primed for sales, by identifying prospects who are already further along in the sales funnel. These priority leads hold immense potential and, when nurtured effectively, can result in unparalleled conversion rates. By leveraging our HQL service, you gain access to pre-qualified prospects who are ready to engage in meaningful sales conversations, streamlining your sales process and maximizing your revenue potential.",
            align: "right",
            image: "/services/leadgen.png",
        },
        {
            type: "cards",
            heading: "How we help",
            items: [
                {
                title: "Direct incentive to lead purchase",
                body:
                    "If your lead generation strategy is broken, let BANT bring you qualified leads in a specific timeframe. Acumen Intelligence configures the prospect and sales representative at a standpoint so they can collaborate and close the best deals.",
                },
                {
                title: "BANT it with Acumen Intelligence",
                body:
                    "The ultimate nurturing of BANT lead generation is keeping volume and quality equally at every sale funnel stage. We fine-tune Ideal customer profiles who show a greater interest in your offerings and receive callbacks from sales executives.",
                },
                {
                title: "Boosted campaign conversion rates",
                body:
                    "Our customer representatives share clear values with buyers and ask custom questions to filter out the smooth- running option to unparalleled conversion rates. Our methodology ensures that you have a constant communication channel open with the buyer.",
                },
            ],
        },
        {
            type: "text",
            heading: "A lead that meets between your marketing & sales",
            body:
                "In the wake of severe pandemics, our telemarketing strategy is convenient for leads to purchase your items. Acumen Intelligence offers prior call-to-action leads. Something more convenient than a rundown of contact, clearer, and easy-reachable",
            image: "/services/leadgen.png",
            align: "right",
            cta: { label: "Get started today", href: "/contact" } 
        }
    ],
};

export default svc;
