import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;
public class Solution {
	// 코딩 토너먼트 참가자 2**K명
	// 싱글 엘리미네이션 방식으로 각 사람은 최대 K번의 경기를 치룸
	// 이기는 경우 = 코딩 실력이 높은 사람 or 코딩실력이 같으면 둘 중 하나가 이김
	// 지루한 정도 = 두 사람의 코딩 실력의 차이
	// 모든 경기에 대해 경기의 지루한 정도의 총합을 구하는 프로그램
	static int answer;
	static int winner;
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		int T = Integer.parseInt(br.readLine());
		for(int tc=1;tc<=T;tc++) {
			int K = Integer.parseInt(br.readLine()); // 2**K == 총 참가자 수
			st = new StringTokenizer(br.readLine());
			int total = (int) Math.pow(2, K);
			answer = 0;
			
			List<Integer> list = new ArrayList<Integer>();
			for(int i=0;i<total;i++) { // 배열에 입력
				list.add(Integer.parseInt(st.nextToken()));
			}
			
			while(list.size() > 1) { // list의 크기가 1일 때까지
				List<Integer> nextRound = new ArrayList<Integer>();
				for(int i=0;i<list.size();i+=2) {
					Fight(list.get(i), list.get(i+1));
					nextRound.add(winner);
				}
				list = nextRound;
			}
			sb.append("#"+tc+" "+answer+"\n");
		}
		System.out.print(sb);
	}
	public static void Fight(int a, int b) {
		winner = 0;
		if(a >= b) {
			winner = a;
			answer += (a - b);
		}else {
			winner = b;
			answer += (b - a);
		}
	}
}
