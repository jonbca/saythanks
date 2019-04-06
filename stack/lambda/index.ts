import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

export default async function handler(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
    console.log('request: ', JSON.stringify(event));

    return {
        statusCode: 200,
        body: 'Hello, world!',
        headers: { 'Content-Type': 'text/plain' }
    };
}
