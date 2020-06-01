import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { TestLinkItem, TestLinkTitle, TestLinkContainer} from './styles';

const TestLink = ({ user }) => {
    return (
        <Layout user={ user }>
            <div>
                <TestLinkTitle> TestLink </TestLinkTitle>
                <ul>
                    <TestLinkItem>
                            <TestLinkContainer> <p>Hello World!!</p></TestLinkContainer>                            
                        </TestLinkItem>
                    ))}
                </ul>                
            </div>
        </Layout>
    );
};

export default TestLink;