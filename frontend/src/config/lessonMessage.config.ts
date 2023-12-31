/**
 * @description
 * Этот класс содержит настройку для плеера видео на странице конспекта
 */
export default class LessonMessageConfig {
	private static heightCorrelation = 0.575

	static videoWidth: string = '600'
	static videoHeight: string = (
		Number(this.videoWidth) * this.heightCorrelation
	).toString()
}
