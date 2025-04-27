# Mental Compass

## Introduction

Mental health challenges among university students are a growing concern. Mental Compass is designed to provide a **reward-based, engaging, and supportive mental health platform** that integrates **gamification, AI-driven insights, and community engagement** to promote proactive well-being.

## Features

- **Personalized Wellness Dashboard** – Track mood, sleep, and stress levels.
- **Gamified Wellness Challenges** – Encourage self-care and engagement.
- **Reward System** – Earn points redeemable for real-world perks.
- **AI-Powered Insights** – Get personalized mental health recommendations.
- **Mindfulness & Stress-Relief Activities** – Access guided exercises.
- **Mental Health Resource Hub** – Connect with support services.
- **Community Engagement** – Foster a supportive campus culture.

## Problem Statement

University students often struggle with **academic pressure, financial stress, and social challenges**, yet existing mental health solutions focus **more on crisis management than proactive care**. Stigma and lack of awareness further discourage students from seeking help.

Mental Compass bridges this gap by providing an **accessible, gamified, and AI-driven** platform that empowers students to take charge of their well-being.

## Project Goals

- Develop a **user-friendly platform** accessible via web and mobile.
- Implement **gamification and reward-based incentives** for mental health.
- Integrate **AI-powered analytics** for personalized wellness tracking.
- Foster **a supportive community** to reduce stigma.

## Tech Stack

- **Frontend**: Next.js
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: Clerk
- **UI Components**: ShadCN

## Running Locally

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Drizzle ORM](https://orm.drizzle.team/)

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/mental-compass.git
   cd mental-compass
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up the environment variables by creating a `.env` file and adding the required credentials:

   ```env
   DATABASE_URL=your_postgresql_connection_string
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   CLERK_API_KEY=your_clerk_api_key
   ```

4. Run database migrations:

   ```sh
   npx drizzle-kit push
   ```

5. Start the development server:
   ```sh
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

## Methodology

1. **User Research** – Surveys and interviews with students.
2. **Platform Development** – Web and mobile-friendly platform.
3. **Gamification Implementation** – Wellness challenges and reward system.
4. **AI Integration** – Mood analysis and personalized insights.
5. **User Testing** – Iterative improvements based on feedback.
6. **Launch and Evaluation** – Deployment on university campuses.

## Future Enhancements

- Integration with university counseling services.
- Expanded support for more educational institutions.
- Advanced AI-driven mental health insights.

## Impact and Significance

- Encourages proactive mental wellness instead of crisis intervention.
- Reduces stigma around seeking mental health support.
- Promotes community engagement and peer support.
- Empowers students to take control of their mental health.

## Get Involved

Contributions, feedback, and suggestions are welcome. If you're interested in collaborating, feel free to open an issue or submit a pull request.

Mental Compass aims to make mental health support more accessible and engaging for students.
"Guiding Minds Toward Wellness"🚀
