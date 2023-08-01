import React from 'react';
import styled from 'styled-components';

const WrapLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #6dd5fa;
  min-height: 100vh;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  div {
    /* Finally, a use for "groove"! */
    border: 24px groove #6dd5fa;

    display: table-cell;
    border-radius: 999px;
    animation: spin 15s linear infinite;
  }
`;

const LoadingWholePage = () => {
  return (
    <WrapLoading>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapLoading>
  );
};

export default LoadingWholePage;
