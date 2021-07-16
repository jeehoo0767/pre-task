import React, { useState } from 'react';
import Note from './Note';
import { addPost } from '../modules/eventHandler';
import { PostitValues } from '../models/postModel';
import DeleteModal from '../Modal/DeleteModal';
interface NoteListProps {
  noteList: PostitValues[];
  setPostitValues: React.Dispatch<React.SetStateAction<PostitValues[]>>;
}

const NoteList: React.FC<NoteListProps> = ({ noteList, setPostitValues }: NoteListProps) => {
  const [clickedPost, setClickedPost] = useState<number>();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="note-wrap" onDoubleClick={() => addPost(noteList, setPostitValues)}>
        <ul className="notes_list">
          <Note noteList={noteList} setPostitValues={setPostitValues} handleShow={handleShow} setClickedPost={setClickedPost} />
        </ul>
      </div>
      {show && (
        <DeleteModal
          show={show}
          handleClose={handleClose}
          noteList={noteList}
          setPostitValues={setPostitValues}
          clickedPost={clickedPost}
        />
      )}
    </>
  );
};

export default NoteList;
