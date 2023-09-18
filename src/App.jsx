import { BrowserRouter, Routes, Route } from "react-router-dom";


import TopicsPage from "./pages/TopicsPage";
import LessonsPage from "./pages/LessonsPage";
import LoginPage from "./pages/LoginPage";
import LevelPage from "./pages/LevelPage";
import WordsPage from "./pages/WordsPage";
import AdminLayout from "./layout/AdminLayout";
import QuizzesPage from "./pages/QuizzesPage";
import QuizPage from "./pages/QuizPage";
import TicketsPage from "./pages/TicketsPage";



import { TopicsProvider } from "./context/topicsProvider";
import { LessonsProvider } from "./context/lessonsProvider";
import { LevelsProvider } from "./context/levelsProvider";
import { WordsProvider } from "./context/wordsProvider";
import { AuthProvider } from "./context/authProvider";
import { QuizProvider } from "./context/QuizProvider";


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <TopicsProvider>
            <LessonsProvider>
              <LevelsProvider>
                <WordsProvider>
                  <QuizProvider>
                <Routes>
                  <Route path="/admin" element={<AdminLayout/>}>
                    <Route index element={<h1>Home</h1>} />
                    <Route path="topics" element={<TopicsPage />} />
                    <Route path="lessons" element={<LessonsPage />} />
                    <Route path="levels" element={<LevelPage />} />
                    <Route path="words" element={<WordsPage/>} />
                    <Route path="quizzes" element={<QuizzesPage/>} />
                    <Route path="quiz/:id" element={<QuizPage/>} />
                    <Route path="tickets" element={<TicketsPage/>} />
                    <Route path="user" element={<h1>User</h1>} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                  </Route>

              <Route path="/" >   
                  <Route index element={<LoginPage />}/>
              </Route>
    
                </Routes>
                </QuizProvider>
                </WordsProvider>
              </LevelsProvider>
            </LessonsProvider>
          </TopicsProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
