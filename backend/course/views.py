import json

from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404
from rest_framework import generics, permissions, status
from rest_framework.generics import get_object_or_404

from .permissions import *
from .serializers import *
from rest_framework.views import APIView


class GetAfterCreateMixin:
    def get_object(self):
        queryset = self.get_queryset()  # Get the base queryset
        queryset = self.filter_queryset(queryset)  # Apply any filter backends
        filter = {}
        for field in self.lookup_fields:
            if self.kwargs.get(field):  # Ignore empty fields.
                filter[field] = self.kwargs[field]
        obj = get_object_or_404(queryset, **filter)  # Lookup the object
        self.check_object_permissions(self.request, obj)
        return obj


class CoursesAPICreateView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CoursesSerializer

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Courses.objects.all()
        user = self.request.user
        return Courses.objects.filter(
            course_id__in=UserCourse.objects.filter(user_id=user.id).values_list("course_id", flat=True))


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
            course_id__in=UserCourse.objects.filter(user_id=user.id).values_list("course_id", flat=True)))


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
            course_id__in=UserCourse.objects.filter(user_id=user.id).values_list("course_id", flat=True))).values_list(
            "module_id", flat=True))


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

    def get_queryset(self):
        user = self.request.user
        return Test.objects.filter(lesson_id__in=Lessons.objects.filter(module_id__in=Modules.objects.filter(course_id__in=Courses.objects.filter(
            course_id__in=UserCourse.objects.filter(user_id=user.id).values_list("course_id", flat=True))).values_list(
            "module_id", flat=True)).values_list(
            "lesson_id", flat=True))


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


class SelectedAnswersAPICreateView(generics.CreateAPIView, GetAfterCreateMixin):
    queryset = SelectedAnswers.objects.all()
    serializer_class = SelectedAnswersSerializer
    permission_classes = [permissions.IsAuthenticated]


class CompletedTestsAPIDetail(generics.RetrieveAPIView):
    queryset = CompletedTests.objects.all()
    serializer_class = CompletedTestsSerializer
    permission_classes = [permissions.IsAuthenticated, CompletedTestsPermission]


class CompletedTestsAPICreateView(generics.ListCreateAPIView, GetAfterCreateMixin):
    queryset = CompletedTests.objects.all()
    serializer_class = CompletedTestsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_superuser:
            return CompletedTests.objects.all()
        return CompletedTests.objects.filter(user_id=self.request.user.id)


class CompletedQuestionsAPIDetail(generics.RetrieveAPIView):
    queryset = CompletedQuestions.objects.all()
    serializer_class = CompletedQuestionsSerializer
    permission_classes = [permissions.IsAuthenticated]


class CompletedQuestionsAPICreateView(generics.CreateAPIView, GetAfterCreateMixin):
    queryset = CompletedQuestions.objects.all()
    serializer_class = CompletedQuestionsSerializer
    permission_classes = [permissions.IsAuthenticated]


class CompletedQuestionCheckView(generics.RetrieveUpdateAPIView):
    queryset = CompletedQuestions.objects.all()
    serializer_class = CompletedQuestionCheckSerializer
    permission_classes = [permissions.IsAuthenticated]


class CompletedLessonsAPICreateView(generics.ListCreateAPIView):
    queryset = CompletedLessons.objects.all()
    serializer_class = CompletedLessonsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return CompletedLessons.objects.filter(user_id=self.request.user.id)


class CompletedLessonsAPIDetail(generics.RetrieveAPIView):
    queryset = CompletedLessons.objects.all()
    serializer_class = CompletedLessonsSerializer
    permission_classes = [permissions.IsAuthenticated, CompletedLessonsPermission]


class ProgressCourseAPIDetail(APIView):
    queryset = Courses.objects.all()
    permission_classes = [permissions.IsAuthenticated, CoursePermission]

    def get_object(self, pk):
        try:
            obj = Courses.objects.get(pk=pk)
            self.check_object_permissions(self.request, obj)
            return obj
        except ObjectDoesNotExist:
            raise Http404

    def get(self, request, *args, **kwargs):
        try:
            pk = self.kwargs['pk']
            course = self.get_object(pk)
            modules = Modules.objects.filter(course_id=course.course_id)
            lessons = Lessons.objects.filter(module_id__in=modules.values_list("module_id", flat=True))
            completed_lessons = (CompletedLessons.objects
                                 .filter(lesson_id__in=lessons.values_list("lesson_id", flat=True))
                                 .filter(user_id=self.request.user.id))
            tests = Test.objects.filter(lesson_id__in=lessons.values_list("lesson_id", flat=True))
            completed_tests = (CompletedTests.objects
                               .filter(test_id__in=tests.values_list("test_id", flat=True))
                               .filter(user_id=self.request.user.id))
            # print(modules)
            # print(lessons)
            # print(completed_lessons)
            # print(tests)
            # print(completed_tests)
            progress = (len(completed_lessons) + len(completed_tests)) / (len(tests) + len(lessons))
            return Response({"progress": progress,
                             "lessons": len(lessons), 'completed_lessons': len(completed_lessons),
                             "tests": len(tests), "completed_tests": len(completed_tests)})
        except ObjectDoesNotExist:
            return Response({"message": "ОШИБКА"})


class QuestionCountAPIDetail(APIView):
    queryset = Questions.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, pk):
        try:
            obj = Questions.objects.get(pk=pk)
            self.check_object_permissions(self.request, obj)
            return obj
        except ObjectDoesNotExist:
            raise Http404

    def get(self, request, *args, **kwargs):
        pk = self.kwargs['pk']
        question = self.get_object(pk)
        answers_question_right = Answers.objects.filter(question_id=question.question_id).filter(is_right=True)
        count_right = len(answers_question_right)
        return Response({"count": count_right})


class CompletedTestView(APIView):
    queryset = Questions.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        pk = self.kwargs['pk']
        try:
            data = CompletedTests.objects.filter(user_id=self.request.user.id).filter(test_id=pk)
            serializer = CompletedTestSerializer(data[len(data) - 1])
            return Response(serializer.data)
        except Exception as e:
            return Response({'error': 'wrong pk'})


class ProgressModuleAPIDetail(APIView):
    queryset = Modules.objects.all()
    permission_classes = [permissions.IsAuthenticated, ModulesPermission]

    def get(self, request, *args, **kwargs):
        try:
            pk = self.kwargs['pk']
            lessons = Lessons.objects.filter(module_id=pk)
            completed_lessons = (CompletedLessons.objects
                                 .filter(lesson_id__in=lessons.values_list("lesson_id", flat=True))
                                 .filter(user_id=self.request.user.id))
            tests = Test.objects.filter(lesson_id__in=lessons.values_list("lesson_id", flat=True))
            completed_tests = (CompletedTests.objects
                               .filter(test_id__in=tests.values_list("test_id", flat=True))
                               .filter(user_id=self.request.user.id))
            progress = (len(completed_lessons) + len(completed_tests)) / (len(tests) + len(lessons))
            return Response({"progress": progress,
                             "lessons": len(lessons), 'completed_lessons': len(completed_lessons),
                             "tests": len(tests), "completed_tests": len(completed_tests)})
        except ObjectDoesNotExist:
            return Response({"message": "ОШИБКА"})
