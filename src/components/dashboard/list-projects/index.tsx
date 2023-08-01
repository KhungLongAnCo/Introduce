import React, { useRef, useCallback } from 'react';
import { Container, Title } from 'components/ui/common/index';
import { Element } from 'react-scroll';
import { SwiperOptions } from 'swiper';
import styled from 'styled-components';
import Swiper, { SwiperInstance } from 'react-id-swiper';

import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const WrapTable = styled.div`
  overflow: auto;
  z-index: 100;
  color: ${({ theme }) => theme.text};
  table {
    background-color: white;
  }
`;

const ListProject = [
  {
    id: 1,
    name: 'I-nautix',
    business: (
      <div>
        <div>
          <b>【Project】: </b> I-nautix
          <br />
          <b>【Business】:</b> Global Market Place for Inspectors and Inspection
          Management
        </div>
        <hr />
        <div>
          <b>≪Responsibility≫</b>
          <ul>
            {' '}
            <li>Work directly with customers</li>
            <li>Coding and maintain system with Front-end leader side</li>
            <li>Review members code and deloy</li>
          </ul>
        </div>
      </div>
    ),
    process: (
      <div>
        Analysis/Requirement
        <br /> Coding
        <br /> Review code
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>React Js</li>
          <li>Nest Js</li>
          <li>Node Js</li>
          <li>My Sql</li>
        </ul>
      </div>
    ),
    // link: 'https://dev.i-nautix.com/',
    size: 'More than 20',
    role: 'Front-End Leader',
    time: 'APRIL 2022 - AGUST-2023',
  },
  {
    id: 2,
    name: 'Angkorpass reseller',
    business: (
      <div>
        <div>
          <b>【Project】: </b> Angkorpass reseller
          <br />
          <b>【Business】:</b> Selling and managing tickets for angkor temple.
        </div>
        <hr />
        <div>
          <b>≪Responsibility≫</b>
          <ul>
            <li>Coding and maintain system with Front-end side</li>
          </ul>
        </div>
      </div>
    ),
    process: (
      <div>
        Analysis/Requirement
        <br /> Coding
        <br /> Review code
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>React Js</li>
          <li>Node Js</li>
          <li>My Sql</li>
        </ul>
      </div>
    ),
    size: '2',
    role: 'Front-End Developer',
    link: '',
    time: 'MARCH 2022 - APRIL 2022',
  },
  {
    id: 3,
    name: 'Pipeflare',
    business: (
      <div>
        <div>
          <b>【Project】: </b> Pipeflare{' '}
          <a
            href="https://pipeflare.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Now
          </a>
          <br />
          <b>【Business】:</b> Marketing Zen crypto currency.(Belong project
          Zen)
          <br />
        </div>
        <hr />
        <div>
          <b>≪Responsibility≫</b>
          <ul>
            <li>Work directly with customers</li>
            <li>
              Coding and maintain system with Front-end mainly, Back-end
              sometime
            </li>
          </ul>
        </div>
      </div>
    ),
    process: (
      <div>
        Analysis/Requirement
        <br /> Coding
        <br /> Review code
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>Javascript</li>
          <li>Css</li>
          <li>PHP</li>
          <li>Laravel</li>
          <li>My SQL</li>
        </ul>
      </div>
    ),
    size: 'More than 20',
    role: 'Front-End Developer',
    link: 'https://pipeflare.io/',
    time: 'MAY 2021 - MARCH 2022',
  },
  {
    id: 4,
    name: 'Horizen',
    business: (
      <div>
        <div>
          <b>【Project】: </b> Horizen{' '}
          <a
            href="https://www.horizen.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Now
          </a>
          <br />
          <b>【Business】:</b> Marketing Zen crypto currency.(Belong project
          Zen)
        </div>
        <hr />
        <div>
          <b>≪Responsibility≫</b>
          <ul>
            {' '}
            <li>Work directly with customers</li>
            <li>
              {' '}
              Coding and maintain system with Front-end mainly, Back-end
              sometime
            </li>
          </ul>
        </div>
      </div>
    ),
    process: (
      <div>
        Analysis/Requirement
        <br /> Coding
        <br /> Review code
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>Ruby</li>
          <li>Javscript Js</li>
          <li>Scss</li>
        </ul>
      </div>
    ),
    size: 'More than 20',
    role: 'Front-End Developer',
    link: 'https://www.horizen.io/',
    time: 'MAY 2021 - MARCH 2022',
  },
  {
    id: 5,
    name: 'Bicycle Blue Book V3',
    business: (
      <div>
        <div>
          <b>【Project】: </b> Bicycle Blue Book V3{' '}
          <a
            href="https://www.bicyclebluebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Now
          </a>
          <br />
          <b>【Business】:</b> A Marketplace helps you buying and selling
          bicycles easily
        </div>
        <hr />
        <div>
          <b>≪Responsibility≫</b>
          <ul>
            {' '}
            <li>Coding and maintain system with Front-end side</li>
          </ul>
        </div>
      </div>
    ),
    process: (
      <div>
        Analysis/Requirement
        <br /> Coding
        <br /> Review code
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>Next Js</li>
          <li>Typescript Js</li>
          <li>Node Js</li>
          <li>Express</li>
        </ul>
      </div>
    ),
    size: '8',
    role: 'Front-End Developer',
    // link: 'https://www.bicyclebluebook.com/',
    time: 'FEBRUARY 2021 - MAY 2021',
  },
  {
    id: 6,
    name: 'Bicycle Blue Book',
    business: (
      <div>
        <div>
          <b>【Project】: </b> Bicycle Blue Book{' '}
          <a
            href="https://www.bicyclebluebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Now
          </a>
          <br />
          <b>【Business】:</b> A Marketplace helps you buying and selling
          bicycles easily.
        </div>
        <hr />
        <div>
          <b>≪Responsibility≫</b>
          <ul>
            <li>Coding and maintain system with Front-end side</li>
          </ul>
        </div>
      </div>
    ),
    process: (
      <div>
        Analysis/Requirement
        <br /> Coding
        <br /> Review code
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>React Js</li>
          <li>Node Js</li>
        </ul>
      </div>
    ),
    size: 'More than 20',
    role: 'Front-End Developer',
    link: 'https://www.bicyclebluebook.com/',
    time: 'APRIL 2020 - FEBRUARY 2021',
  },
  {
    id: 7,
    name: 'IntelAds',
    business: (
      <div>
        <div>
          <b>【Project】: </b> IntelAds{' '}
          <a
            href="https://intelads.vn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Now
          </a>
          <br />
          <b>【Business】:</b> Deliver advertising through outdoor signage and
          buses quickly and easily
        </div>
        <hr />
        <div>
          <b>≪Responsibility≫</b>
          <ul>
            {' '}
            <li>Work directly with customers</li>
            <li>
              Coding and maintain system with Front-end mainly, sometime BE
            </li>
            <li>Review members code and deloy</li>
          </ul>
        </div>
      </div>
    ),
    process: (
      <div>
        Analysis/Requirement
        <br /> Coding
        <br /> Review code
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>React Js</li>
          <li>Javascript</li>
          <li>Java</li>
          <li>Postgre Sql</li>
        </ul>
      </div>
    ),
    size: 'More than 5',
    role: 'Front-End Developer',
    link: 'https://intelads.vn/',
    time: 'AUGUST 2019 - MARCH 2020',
  },
];

const columns: ColumnsType<any> = [
  {
    title: 'NO',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Period',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Business',
    dataIndex: 'business',
    key: 'business',
  },
  {
    title: 'Development Environment',
    dataIndex: 'technologies',
    key: 'technologies',
  },
  {
    title: 'Process',
    dataIndex: 'process',
    key: 'process',
  },
  {
    title: 'Team size',
    dataIndex: 'size',
    key: 'size',
  },
];

const ListProjects = () => {
  return (
    <Element name="projects" id="projects">
      <Container>
        <Title>* Projects</Title>

        <WrapTable>
          <Table columns={columns} bordered dataSource={ListProject} />
        </WrapTable>
      </Container>
    </Element>
  );
};

export default ListProjects;
