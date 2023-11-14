from rest_framework import generics, permissions
from .permissions import CoursePermission, UserCoursePermission, ModulesPermission, LessonsPermission
from .serializers import *


class CoursesAPICreateView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CoursesSerializer

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Courses.objects.all()
        user = self.request.user
        return Courses.objects.filter(
            id__in=UserCourse.objects.filter(user_id=user.id).values_list("course_id", flat=True))


class CoursesAPIDetail(generics.RetrieveAPIView):
    queryset = Courses.objects.all()
    serializer_class = CoursesSerializer
    permission_classes = [permissions.IsAuthenticated, CoursePermission]


class UserCourseAPICreateView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserCourseSerializer

    def get_queryset(self):
        return UserCourse.objects.filter(user_id=self.request.user.id)


class UserCourseAPIDetail(generics.RetrieveAPIView):
    queryset = UserCourse.objects.all()
    serializer_class = UserCourseSerializer
    permission_classes = [permissions.IsAuthenticated, UserCoursePermission]


class ModulesAPICreateView(generics.ListAPIView):
    serializer_class = ModulesSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Modules.objects.all()
        user = self.request.user
        return Modules.objects.filter(course_id__in=Courses.objects.filter(
            id__in=UserCourse.objects.filter(user_id=user.id).values_list("course_id", flat=True)))


class ModulesAPIDetail(generics.RetrieveAPIView):
    queryset = Modules.objects.all()
    serializer_class = ModulesSerializer
    permission_classes = [permissions.IsAuthenticated, ModulesPermission]


class LessonsAPICreateView(generics.ListAPIView):
    queryset = Lessons.objects.all()
    serializer_class = LessonsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Lessons.objects.all()
        user = self.request.user
        return Lessons.objects.filter(module_id__in=Modules.objects.filter(course_id__in=Courses.objects.filter(
            id__in=UserCourse.objects.filter(user_id=user.id).values_list("course_id", flat=True))).values_list("id", flat=True))


class LessonsAPIDetail(generics.RetrieveAPIView):
    queryset = Lessons.objects.all()
    serializer_class = LessonsSerializer
    permission_classes = [permissions.IsAuthenticated, LessonsPermission]


class QuestionAPICreateView(generics.ListAPIView):
    queryset = Questions.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [permissions.IsAuthenticated]


class QuestionAPIDetail(generics.RetrieveAPIView):
    queryset = Questions.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [permissions.IsAuthenticated]


class TestAPIDetail(generics.RetrieveAPIView):
    queryset = Test.objects.all()
    serializer_class = TestSerializer
    permission_classes = [permissions.IsAuthenticated]


class TestAPICreateView(generics.ListAPIView):
    queryset = Test.objects.all()
    serializer_class = TestSerializer
    permission_classes = [permissions.IsAuthenticated]


class AdminCoursesAPICreateView(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]
    serializer_class = CoursesSerializer

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Courses.objects.all()


class AdminCoursesAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Courses.objects.all()
    serializer_class = AdminCoursesSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]


class AdminUserCourseAPICreateView(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]
    queryset = UserCourse.objects.all()
    serializer_class = AdminUserCourseSerializer


class AdminUserCourseAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserCourse.objects.all()
    serializer_class = AdminUserCourseSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]


class AdminModulesAPICreateView(generics.ListCreateAPIView):
    queryset = Modules.objects.all()
    serializer_class = AdminModulesSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]


class AdminModulesAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Modules.objects.all()
    serializer_class = AdminModulesSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]


class AdminLessonsAPICreateView(generics.ListCreateAPIView):
    queryset = Lessons.objects.all()
    serializer_class = AdminLessonsSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]


class AdminLessonsAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lessons.objects.all()
    serializer_class = AdminLessonsSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]


class AdminQuestionAPICreateView(generics.ListCreateAPIView):
    queryset = Questions.objects.all()
    serializer_class = AdminQuestionSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]


class AdminQuestionAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Questions.objects.all()
    serializer_class = AdminQuestionSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]


class AdminCompletedQuestionsAPICreateView(generics.ListCreateAPIView):
    queryset = CompletedQuestions.objects.all()
    serializer_class = AdminCompletedQuestionsSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]


class AdminCompletedQuestionsAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CompletedQuestions.objects.all()
    serializer_class = AdminCompletedQuestionsSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]


class AdminTestAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Test.objects.all()
    serializer_class = TestSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]


class AdminTestAPICreateView(generics.ListCreateAPIView):
    queryset = Test.objects.all()
    serializer_class = TestSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]


class AnswersAPIDetail(generics.RetrieveAPIView):
    queryset = Answers.objects.all()
    serializer_class = AnswersSerializer
    permission_classes = [permissions.IsAuthenticated]


class AnswersAPICreateView(generics.ListAPIView):
    queryset = Answers.objects.all()
    serializer_class = AnswersSerializer
    permission_classes = [permissions.IsAuthenticated]


class SelectedAnswersAPIDetail(generics.RetrieveAPIView):
    queryset = SelectedAnswers.objects.all()
    serializer_class = SelectedAnswersSerializer
    permission_classes = [permissions.IsAuthenticated]


class SelectedAnswersAPICreateView(generics.CreateAPIView):
    queryset = SelectedAnswers.objects.all()
    serializer_class = SelectedAnswersSerializer
    permission_classes = [permissions.IsAuthenticated]


class CompletedTestsAPIDetail(generics.RetrieveAPIView):
    queryset = CompletedTests.objects.all()
    serializer_class = CompletedTestsSerializer
    permission_classes = [permissions.IsAuthenticated]


class CompletedTestsAPICreateView(generics.CreateAPIView):
    queryset = CompletedTests.objects.all()
    serializer_class = CompletedTestsSerializer
    permission_classes = [permissions.IsAuthenticated]


class CompletedQuestionsAPIDetail(generics.RetrieveAPIView):
    queryset = CompletedQuestions.objects.all()
    serializer_class = CompletedQuestionsSerializer
    permission_classes = [permissions.IsAuthenticated]


class CompletedQuestionsAPICreateView(generics.CreateAPIView):
    queryset = CompletedQuestions.objects.all()
    serializer_class = CompletedQuestionsSerializer
    permission_classes = [permissions.IsAuthenticated]
