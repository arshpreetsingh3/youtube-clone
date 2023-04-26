import React from 'react';

const commentsData = [
    {
        name:"Arshpreet Singh",
        text:"Lorem ipsum dolor sit amet, consect",
        replies:[

        ]
    },
    {
        name:"Arshpreet Singh",
        text:"Lorem ipsum dolor sit amet, consect",
        replies:[
            {
                name:"Arshpreet Singh",
                text:"Lorem ipsum dolor sit amet, consect",
                replies:[
        
                ]
            },
            {
                name:"Arshpreet Singh",
                text:"Lorem ipsum dolor sit amet, consect",
                replies:[
                    {
                        name:"Arshpreet Singh",
                        text:"Lorem ipsum dolor sit amet, consect",
                        replies:[
                
                        ]
                    },
        
                ]
            },

        ]
    },
    {
        name:"Arshpreet Singh",
        text:"Lorem ipsum dolor sit amet, consect",
        replies:[

        ]
    },
    {
        name:"Arshpreet Singh",
        text:"Lorem ipsum dolor sit amet, consect",
        replies:[

        ]
    },
    {
        name:"Arshpreet Singh",
        text:"Lorem ipsum dolor sit amet, consect",
        replies:[

        ]
    },
]

const Comment = ({data}) => {
    const {name,text,replies} = data;
    return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg'>
        <img className="w-12 h-12" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6Sl74lVN6nuq7t0VMUBTmtgm-JyWiKAaZg&usqp=CAU" />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
);
}

const CommentList = ({comments}) => {
    //Discalimer : Dont use index as key
    return comments.map((comment, index) => (
        <div  key={index} >
            <Comment  data={comment} />
            <div className='pl-5 ml-5 border border-l-black'>
            {/* <Comment  key={index}  data={comment} />
            <Comment  key={index}  data={comment} />
            <Comment  key={index}  data={comment} /> */}
            <CommentList comments={comment.replies}/>
            </div>
        </div>
        ));
};

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentList comments= {commentsData}/>
    </div>
  )
}

export default CommentContainer;