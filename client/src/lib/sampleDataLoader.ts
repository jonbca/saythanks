import faker from 'faker';

export interface ThankYou {
    toName: string;
    fromName?: string;
    timestamp: Date;
    message: string;
}

export interface ThankYouList {
    thankYous: ThankYou[];
}

export default function loadSampleData(): Promise<ThankYouList> {
    const thankYous: ThankYou[] = Array.from({ length: 12 }, () => ({
        toName: faker.name.findName(),
        fromName: faker.name.findName(),
        timestamp: faker.date.recent(),
        message: faker.lorem.sentence()
    }));

    return Promise.resolve({ thankYous });
}
