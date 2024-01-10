import {Link, useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../redux/slices/postsReducer.js"
import {PostPreview} from "../Post/PostPreview.jsx";
import {Pagination} from "../Pagination/Pagination.jsx";
import {retry} from "@reduxjs/toolkit/query";

export const Feed = () => {
    const {data, status} = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);

    const size = searchParams.get("size") || 5;
    useEffect(() => {
        dispatch(fetchPosts({
            page: currentPage,
            size: size
        }));
    }, [currentPage, size])

    const handlePage = (page) => {
        setCurrentPage(page)
    }

    return (
        <div>
            {data && (
                <>
                    <div className={"flex justify-between text-2xl text-black font-bold "}>
                        <h1 className={"mr-2"}>ALL QUESTIONS</h1>
                        <Link to={"/create-post"} className={"base_button"}>
                            Create question
                        </Link>
                    </div>

                    {data?.elements?.map(e => {
                        console.log(e);
                        return (
                            <PostPreview key={e.id} post={e}/>

                        )
                    })}

                    <div className={"w-full flex justify-center mt-10"}>
                        <Pagination currentPage={currentPage} totalPages={data?.totalPages} paginationRange={2}
                                    onChange={handlePage}/>
                    </div>
                </>
            )}

        </div>
    )
}

export default Feed;