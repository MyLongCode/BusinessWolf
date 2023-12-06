/**
 * @description
 * Этот класс содержит все **ссылки запросов для API**
 */
export default class QueriesConfig {
	//API
	static API_URL = 'http://127.0.0.1:8000'

	//AUTH
	static LOGIN_URL = '/auth/token/'
	static CHECK_AUTH_URL = '/auth/token/verify/'

	//USER
	static FETCH_USER_URL = '/api/users/'

	//COURSES
	static FETCH_COURSES_URL = '/api/course/'

	//MODULES
	static FETCH_MODULES_URL = '/api/modules/'

	//QUESTIONS
	static POST_QUESTION_URL = '/api/completedquestions/'
	static CHECK_QUESTION_URL = '/api/completedquestscheck/'
	static FETCH_QUESTIONS_URL = '/api/questions/'

	//ANSWERS
	static FETCH_ANSWERS_URL = '/api/answers/'
	static POST_ANSWERS_URL = '/api/selectedanswers/'

	//LESSONS
	static FETCH_LESSONS_URL = '/api/lessons/'
	static FETCH_COMPLETED_LESSONS_URL = '/api/completedlessons/'

	//TESTS
	static FETCH_TEST_URL = '/api/test/'
	static FETCH_COMPLETED_TEST_URL = '/api/completedtest/'
	static FETCH_ALL_COMPLETED_TESTS_URL = '/api/completedtests/'
	static POST_TEST_URL = '/api/completedtests/'
}
