import { useParams } from 'react-router-dom';

const Member = () => {
  const params = useParams();
  return (
    <div>
      <h1>Member's page</h1>
      <h2>{params.fullName}</h2>
    </div>
  );
};

export default Member;
