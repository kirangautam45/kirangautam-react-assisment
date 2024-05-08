import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  justify-content: center;
`;

const Loader = styled.div`
display:flex;
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #8F8B8B;
  width: 60px;
  height: 60px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

const Spinner = () => {
  return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
};

export default Spinner;
