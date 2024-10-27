
import {useState} from "react";

function CommentsList() {

    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
        ]);
        const deleteComments = (id) => {
            setComments(comments.filter((comment) => comment.id !== id));
        };
    
        return (
            <div>
                <h2>Коментарии:</h2>
                <ul class="markers">
                    {comments.map((comment) => (
                        <li>
                            {comment.text} <button class="btn" onClick={() => deleteComments(comment.id)}>Удалить комментарий</button>
                            
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

export default CommentsList;