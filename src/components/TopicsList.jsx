import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import TopicCard from "./TopicCard";

export default function TopicsList() {


const [topics, setTopics] = useState([]);   


 useEffect(() => {
    getTopics()
    .then((topics) => {
        setTopics(topics)
    })
    }, [])

 return (
    <>{topics.map((topic) => {
        return (
             <TopicCard key={topic.slug} slug={topic.slug} />
        )
    })}
    </>
 )
}