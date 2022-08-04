const Card_data = [
    {
        id : "1",
        img_src : "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2222,w_1500/https%3A%2F%2Fnetflixlife.com%2Ffiles%2F2022%2F02%2FEN_ST4_Teaser_Russia_Vertical_27x40_RGB.jpg",
        org_name : "NETFLIX ORIGNAL SERIES",
        ser_name : "Stranger Things",
        button : "https://www.netflix.com/search?q=stranger&jbv=80057281",
    },
    {
        id : "2",
        img_src : "data:image/jpeg;base64,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",
        org_name : "NETFLIX ORIGNAL SERIES",
        ser_name : "Dark",
        button : "https://www.netflix.com/search?q=dark&jbv=80100172",
    },
    {
        id : "3",
        img_src : "https://www.themoviedb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
        org_name : "NETFLIX ORIGNAL SERIES",
        ser_name : "Money Heist",
        button : "https://www.netflix.com/search?q=money&jbv=80192098",
    },
    
]

export default Card_data;